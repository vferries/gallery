define(["aurelia-framework"], function (framework) {
  "use strict";

  var Behavior = framework.Behavior;
  var NavBar = function NavBar() {};

  NavBar.metadata = function () {
    return Behavior.withProperty("router");
  };

  NavBar.prototype.created = function() {};

  return NavBar;
});
