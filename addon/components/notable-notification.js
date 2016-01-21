import Ember from 'ember';
import layout from '../templates/components/notable-notification';

const {oneWay} = Ember.computed;

export default Ember.Component.extend({
  layout: layout,
	isNotifying: oneWay("user.isNotifying"),
});
