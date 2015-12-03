import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { filter, sort } from '@ember/object/computed';

export default Controller.extend({
  filter: "",
  sortAsc: true,

  filteredComics: filter('model', ['filter', 'model.[]', 'model.@each.title'], function (model) {
    const title = model.get('title');
    return !title || title.toLowerCase().match(new RegExp(this.get('filter').toLowerCase()));
  }),

  sortDefinition: computed('sortAsc', function () {
    return ["title:" + (this.get('sortAsc') ? 'asc' : 'desc')]; 
  }),

  sortedComics: sort('filteredComics', 'sortDefinition'),

  actions: {
    sort () {
      this.toggleProperty('sortAsc');
    }
  }
});