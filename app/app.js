
var app = angular.module("myRoute", ["ngRoute"]);

app.config(function($routeProvider) {
  $routeProvider
  .when("/", {
    templateUrl: "home.html"
  })
  .when("/about", {
    templateUrl: "actor.html"
  })
  .when("/contact", {
    templateUrl: "movie.html"
  })
  .otherwise({
    redirectTo: "/"
  });
});