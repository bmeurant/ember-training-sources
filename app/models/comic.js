import Ember from 'ember';

export default Ember.Object.extend({
  slug: function() {
    return this.get('title').dasherize();
  }.property('title'),
  title: '',
  scriptwriter: '',
  illustrator: '',
  publisher: '',
  isFavorite: false,

  reset(comic) {
    this.set('title', comic.get('title'));
    this.set('scriptwriter', comic.get('scriptwriter'));
    this.set('illustrator', comic.get('illustrator'));
    this.set('publisher', comic.get('publisher'));
    this.set('isFavorite', comic.get('isFavorite'));
  }
});
