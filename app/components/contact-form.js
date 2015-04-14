import Ember from "ember";

export default Ember.Component.extend({
  phoneTypes: [
    "Home",
    "Work",
    "iPhone"
  ],

 isInvalid: Ember.computed.not("isValid"),

 isValid: function() {
   const nameValid = this.get("contact.firstName") !== "" &&
    this.get("contact.lastName") !== "";

    const phonesValid = this.get("contact.phones").every(function(phone) {
      const number = phone.get("number");
      return number !== undefined && number !=="";
    });

    return nameValid && phonesValid;
 }.property("contact.{firstName,lastName,phones.@each.number}"),

  actions: {
    save: function() {
      this.sendAction();
    },
    addPhone: function() {
      this.get("contact.phones").createRecord();
    },
    removePhone: function(phone) {
      this.get("contact.phones").removeObject(phone);
    }
  }

});
