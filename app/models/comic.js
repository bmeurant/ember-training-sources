import DS from 'ember-data';

export default DS.Model.extend({
  slug: function () {
    return this.get('title').dasherize();
  }.property('title'),

  title: DS.attr('string', {defaultValue: 'new'}),
  scriptwriter: DS.attr('string'),
  illustrator: DS.attr('string'),
  publisher: DS.attr('string'),
  isFavorite: DS.attr('boolean', {defaultValue: false})
});
