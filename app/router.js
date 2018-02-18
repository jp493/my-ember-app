import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('index', {path: '/'});
  this.route('home');
  this.route('about');
  this.route('contact');
	this.route('details', function() {
    this.route('detail', { path: '/:id'});
  });
});

export default Router;
