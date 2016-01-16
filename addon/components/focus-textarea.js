import Ember from 'ember';

const {on,get,observer} = Ember;

export default Ember.TextArea.extend({
  focusOnInsert: on("didInsertElement",function(){
    if(!get(this,"autoFocus")){return;}
    this.$().focus();
  }),
	refocus: observer("value",function(){
    if(!get(this,"autoFocus")){return;}
		let value = get(this,"value");
		if(value!=null){return;}
    this.$().focus();
	}),
});
