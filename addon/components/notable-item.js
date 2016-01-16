import Ember from 'ember';
import layout from '../templates/components/notable-item';

const {get,computed} = Ember;

export default Ember.Component.extend({
  layout: layout,
  classNames: ["notable-item"],
  classNameBindings: ['rightLeft'],
  rightLeft: computed(function(){
  		var index = get(this,"index");
  		return index % 2 === 0 ? "notable-item-left" : "notable-item-right";
  }),
});
