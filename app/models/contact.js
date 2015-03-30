import DS from "ember-data";

export default DS.Model.extend({
  firstName: DS.attr("string", { defaultValue: ""}),
  lastName: DS.attr("string", { defaultValue: ""}),
  email: DS.attr("string"),

  phones: DS.hasMany("phone"),

  name: function () {
    return this.get("firstName") + " " + this.get("lastName");
    //ES6 return `${this.get("firstName")} ${this.get("lastName")}`;
  }.property("firstName", "lastName")
});
