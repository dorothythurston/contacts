import Ember from "ember";

export default Ember.Component.extend({
  numberField: Ember.TextField.extend({
    keyPressEvent: function(e) {
      if (e.keyCode < 48 || e.keyCode > 57) {
         e.preventDefault();
      }
    }
  }),

  actions: {
    keyDown: function(e) {
      console.log(e);
    }
  }
});


