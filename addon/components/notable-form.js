import Ember from 'ember';
import layout from '../templates/components/notable-form';


const {get,isEmpty,computed,A} = Ember;
const {filterBy} = computed;

export default Ember.Component.extend({
	layout: layout,
	isUsingNotifications: false,
	classNames: ["notable-form"],
	autoFocus: true,
	isEmailingToOthers: false,
	userNotifications: computed("users[],",function(){
		let isUsingNotifications = get(this,"isUsingNotifications");
		if(!isUsingNotifications)return;

		let users = get(this,"users");
		let result = A();
		users.forEach(function(item){
			result.pushObject({isNotifying: false,user: item});
		});
		return result;
	}),
	notifications: filterBy("userNotifications","isNotifying"),
	actions: {
		selectAll(){
			this.selectUsers(true);
		},
		selectNone(){
			this.selectUsers(false);
		},
		toggleIsEmailingToOthers(){
			this.toggleProperty("isEmailingToOthers");
		},
		createNote(){
			if(isEmpty(get(this,"newNote.content"))){return;}
			if(this.attrs.createNote(get(this,"notifications"))){
				this.selectUsers(false);
			}
		}
	},
	selectUsers(all){
		let isUsingNotifications = get(this,"isUsingNotifications");
		if(!isUsingNotifications)return;
		get(this,"userNotifications").setEach("isNotifying",all);
	}
});
