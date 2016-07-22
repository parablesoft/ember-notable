import Ember from 'ember';
import layout from '../templates/components/notable-item';

const {get,computed,Component} = Ember;

const NOTABLE_ITEM_RIGHT = "notable-item-right";
const NOTABLE_ITEM_LEFT = "notable-item-left";
const NOTABLE_ITEM_DEFAULT = NOTABLE_ITEM_LEFT;
const NOTABLE_ITEM_ALTERNATE = `${NOTABLE_ITEM_DEFAULT}-alternate`;

export default Component.extend({
  layout: layout,
  classNames: ["notable-item"],
  classNameBindings: ['rightLeft'],
  rightLeft: computed(function(){
		let isUsingOpposingLayout = get(this,"isUsingOpposingLayout");
		let standard = NOTABLE_ITEM_LEFT;

		let alternate = NOTABLE_ITEM_ALTERNATE;
		if(isUsingOpposingLayout){
			alternate = NOTABLE_ITEM_RIGHT;
		}
		let index = get(this,"index");
		return index % 2 === 0 ? standard : alternate;
  }),
	actions:{
	  delete(){
			this.attrs.deleteNote();
	  }
	}
});
