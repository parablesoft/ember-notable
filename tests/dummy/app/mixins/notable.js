import Ember from 'ember';
import DS from "ember-data";

const {hasMany} = DS;
const {Mixin} = Ember;

export default Mixin.create({
	notes: hasMany("notes", {async: true})
});
