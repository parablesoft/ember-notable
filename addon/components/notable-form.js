import Ember from 'ember';
import layout from '../templates/components/notable-form';


const {get,set} = Ember;

export default Ember.Component.extend({
  layout: layout,
  classNames: ["notable-form"],
  autoFocus: true,
  actions: {
    foo(){
      set(this,"isReadyForSubmit",true);
      return false;
    },
    createNote(){
      this.attrs.createNote();
    }
  }
});
