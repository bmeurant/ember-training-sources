import Route from '@ember/routing/route';

const blackSad = {
  title: 'Blacksad',
  scriptwriter: 'Juan Diaz Canales',
  illustrator: 'Juanjo Guarnido',
  publisher: 'Dargaud'
};

const calvinAndHobbes = {
  title: 'Calvin and Hobbes',
  scriptwriter: 'Bill Watterson',
  illustrator: 'Bill Watterson',
  publisher: 'Andrews McMeel Publishing'
};

const akira = {
  title: 'Akira',
  scriptwriter: 'Katsuhiro Ôtomo',
  illustrator: 'Katsuhiro Ôtomo',
  publisher: 'Epic Comics'
};

export default Route.extend({
  init() {
    this._super(...arguments);
    this.store.createRecord('comic', akira);
    this.store.createRecord('comic', blackSad);
    this.store.createRecord('comic', calvinAndHobbes);
  },
  model () {
    return this.store.peekAll('comic');
  }
});
