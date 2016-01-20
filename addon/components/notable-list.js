import Ember from 'ember';
import layout from '../templates/components/notable-list';

const {computed} = Ember;
const {equal} = computed;

const FORM_LOCATION_TOP = "top";
const FORM_LOCATION_BOTTOM = "bottom";
const FORM_LOCATION_DEFAULT = FORM_LOCATION_BOTTOM;
const DEFAULT_OPPOSING_LAYOUT = false;

export default Ember.Component.extend({
  layout: layout,
  classNames: ["notable-wrapper"],
  formLocation: FORM_LOCATION_DEFAULT,
  isFormOnTop: equal("formLocation",FORM_LOCATION_TOP),
  isFormOnBottom: equal("formLocation",FORM_LOCATION_BOTTOM),
	isUsingOpposingLayout: DEFAULT_OPPOSING_LAYOUT,

});
