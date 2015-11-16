import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('comics', function() {
    this.route('comic', {path: '/:comic_slug', resetNamespace: true});
  });
});

export default Router;
