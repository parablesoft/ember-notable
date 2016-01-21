import Ember from 'ember';
import moment from 'moment';

const {Route,A,RSVP} = Ember;


export default Route.extend({

  model(){
    let items = A();
    items.pushObject({
      content: "Foo",
      posterFullName: "John Doe",
      createdAt: moment().subtract(2,"hours"),
    });
    items.pushObject({
      content: "Bar",
      posterFullName: "Jane Doe",
      createdAt: moment().subtract(1,"hours"),
    });

		let users = A();
		users.pushObject({
			fullName: "Adam Ryan",
		});
		users.pushObject({
			fullName: "Chris Rosende",
		});
    return RSVP.hash({
			notes: items,
			users: users,
		});
  }
});
