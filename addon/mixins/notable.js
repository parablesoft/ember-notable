import Ember from 'ember';
import DS from "ember-data";

const {hasMany} = DS;

export default Ember.Mixin.create({
	notes: hasMany("notes", {async: true})
});
