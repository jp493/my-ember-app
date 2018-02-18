import Ember from 'ember';
const items = [{id:1, name:'Jane Peng'}, {id:2, name:'Rob Withers'}, {id:3, name:'Darren Wong'}];

export default Ember.Route.extend({
	model() {
		return items;
	}
});
