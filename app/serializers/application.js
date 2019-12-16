import { assign } from '@ember/polyfills';
import { isArray } from '@ember/array';
import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  serialize(record, options) {
    options = options || {includeId: true};
    return this._super(record, options);
  },

  normalizeResponse: function (store, type, payload, id, requestType) {
    var content = isArray(payload) ? [] : {};
    if (payload) {
      if (payload.content) {
        content = payload.content;
        delete payload.content;
      } else if (isArray(payload)) {
        content = content.concat(payload);
        payload = {};
      } else {
        for (var key in payload) {
          if (payload.hasOwnProperty(key)) {
            content[key] = payload[key];
            delete payload[key];
          }
        }
      }
      payload[type.modelName] = content;
    }
    return this._super(store, type, payload, id, requestType);
  },

  serializeIntoHash(hash, type, record, options) {
    assign(hash, this.serialize(record, options));
  }
});
