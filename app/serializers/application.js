import Ember from 'ember';
import DS from 'ember-data';

const Serializer = DS.RESTSerializer.extend({
  normalizeSingleResponse(store, primaryModelClass, hash, id, requestType) {
    let newHash = {};

    if (!hash[primaryModelClass.modelName]) {
      newHash[primaryModelClass.modelName] = hash;
    } else {
      newHash = hash;
    }

    return this._super(store, primaryModelClass, newHash, id, requestType);
  }
});

if (!Ember.testing) {
  Serializer.reopen({
    serializeIntoHash(hash, typeClass, snapshot, options) {
      Ember.assign(hash, this.serialize(snapshot, options));
    },

    normalizeArrayResponse(store, primaryModelClass, hash, id, requestType) {
      let newHash = {};
      newHash[primaryModelClass.modelName] = hash;
      return this._super(store, primaryModelClass, newHash, id, requestType);
    }
  });
}

export default Serializer;