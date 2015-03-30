import Ember from "ember";

export default Ember.Controller.extend({
  actions: {
    save: function() {
      const contact =  this.get("model")

      contact.save();
      this.get("flashMessages").success("Content Created");
      this.transitionToRoute("contacts.show", contact);
    },
  }
});
