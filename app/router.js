import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('new');
  this.route('detail', {path:'/:detail'});
});

export default Router;
