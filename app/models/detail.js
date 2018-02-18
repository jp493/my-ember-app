import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  title: DS.attr('string'),
  dates: DS.attr('string'),
	image: DS.attr(),
	city: DS.attr('string'),
  description: DS.attr('string')
});
