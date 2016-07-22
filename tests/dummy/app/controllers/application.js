import Ember from "ember";
import moment from "moment";

const {Controller,computed,get,set} = Ember;
const {alias,filterBy,oneWay} = computed;

export default Controller.extend({
  notes: alias("model.notes"),
	users: oneWay("model.users"),
  newNote: {},
  actions:{
		deleteNote(note){
			get(this,"notes").removeObject(note);
		},
    createNote(notifications){
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
