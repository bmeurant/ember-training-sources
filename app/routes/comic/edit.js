import Route from '@ember/routing/route';

export default Route.extend({
  actions: {
    save () {
      this.get('controller.model').save().then(() => {
        this.transitionTo('comic', this.get('controller.model'));
      });
    },
    cancel () {
      this.get('controller.model').rollbackAttributes();
      this.transitionTo('comic');
    },
    willTransition (transition) {
      if (this.get('controller.model.hasDirtyAttributes')) {
        if (confirm('Are you sure you want to abandon progress?')) {
          this.get('controller.model').rollbackAttributes();
        } else {
          transition.abort();
        }
      }
    }
  }
});
