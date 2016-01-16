import Ember from "ember";
import moment from "moment";

const {Controller,computed,get,set} = Ember;
const {alias} = computed;

export default Controller.extend({
  notes: alias("model"),
  newNote: {},
  actions:{
    createNote(){
      let newNote = get(this,"newNote");
      newNote.createdAt = moment();
      newNote.posterFullName = "Vic Amuso";

      let notes = get(this,"notes");
      notes.pushObject(newNote);
      set(this,"newNote",{});
      return true;
    }
  }
});
