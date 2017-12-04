// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by sweetalert.js.
import { name as packageName } from "meteor/varunlakshmaiah:sweetalert";

// Write your tests here!
// Here is an example.
Tinytest.add('sweetalert - example', function (test) {
  test.equal(packageName, "sweetalert");
});
