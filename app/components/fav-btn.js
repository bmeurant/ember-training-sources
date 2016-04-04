import Component from '@ember/component';

export default Component.extend({
  tagName: 'span',
  classNames: 'btn-fav',
  classNameBindings: 'selected',

  click() {
    this.toggleProperty('selected');
    if (this.get('favorize')) {
      this.get('favorize')();
    }
  }
});
