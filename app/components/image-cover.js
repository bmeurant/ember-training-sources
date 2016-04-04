import Component from '@ember/component';
import { computed } from '@ember/object';
import $ from 'jquery';

export default Component.extend({
  tagName: 'img',
  classNames: 'cover',
  attributeBindings: 'src',
  src: computed('name', function () {
    return this.getImagePath(this.get('name'));
  }),
  currentNode: computed('elementId', function() {
    return $('#' + this.get('elementId'));
  }),

  getImagePath(name) {
    return `/assets/images/comics/covers/${name}.jpg`;
  },

  didInsertElement(...args) {
    this._super(...args);
    this.get('currentNode').on('error', () => {
      return this.onError();
    });
  },

  willDestroyElement(){
    this.get('currentNode').off('error');
  },

  onError() {
    this.get('currentNode').attr('src', this.getImagePath('default'));
  }
});
