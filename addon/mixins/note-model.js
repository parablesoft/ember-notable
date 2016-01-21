import Ember from 'ember';
import DS from 'ember-data';

const {Model,attr,belongsTo,hasMany} = DS;

export default Ember.Mixin.create({
	content: attr("string"),
	createdAt: attr('date'),
	posterFullName: attr("string"),
	notable: belongsTo("notable",{async: true}),
});
