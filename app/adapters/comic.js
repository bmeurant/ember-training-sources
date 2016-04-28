import BaseAdapter from './application';

// eslint-disable-next-line
export default Ember.testing ? BaseAdapter : BaseAdapter.extend({

  urlForQueryRecord(query, modelName) {
    return this._buildURL(modelName) + "?_embed=albums";
  },

  urlForFindAll(modelName) {
    return this._buildURL(modelName) + "?_embed=albums";
  }
});
