import DS from "ember-data";
import Notable from "../mixins/notable";


const {Model,attr} = DS;

export default Model.extend(Notable,{
	firstName: attr("string"),
	lastName: attr('string'),
});
