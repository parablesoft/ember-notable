import Ember from 'ember';
import layout from '../templates/components/initials-avatar';


const {computed,get,isPresent} = Ember;

export default Ember.Component.extend({
  layout: layout,
  classNameBindings: ["initialsClass"],
  initialsClass: computed("index",function(){
    let standard = get(this,"index") % 2 === 0;
    return standard ? "initials-standard" : "initials-alternate";
  }),
  company: null,
  firstName: null,
  lastName: null,
  fullName: null,
  content: computed("firstName","lastName","company","fullName",function(){
    let {company,firstName,lastName,fullName} =
      this.getProperties("company","firstName","lastName","fullName");


    if(isPresent(firstName) && isPresent(lastName)){
      return this.transformWords(firstName,lastName);
    }
    if(isPresent(fullName)){
      let words = fullName.split(" ");
      let firstWord = words[0];
      let secondWord = words[words.length -1];
      if(words.length === 1){
        secondWord=null;
      }
      return this.transformWords(firstWord,secondWord);
    }
    if(isPresent(company)){
      return this.transformWords(company);
    }
    return "";
  }),
  transformWords(firstWord,secondWord=null){
    let firstInitial = firstWord.substring(0,1).toUpperCase();
    let secondInitial = "";
    if(secondWord!=null){
      secondInitial = secondWord.substring(0,1).toUpperCase();
    }
    return `${firstInitial}${secondInitial}`;
  }
});
