"use strict";angular.module("client2App",["ngResource","ngRoute"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl"}).when("/admin/orders",{templateUrl:"views/admin/orders.html",controller:"OrdersCtrl",resolve:{orders:["Order",function(a){return a.index()}]}}).when("/order",{templateUrl:"views/order.html",controller:"OrderFormCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("client2App").controller("MainCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("client2App").controller("AboutCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("client2App").controller("OrdersCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("client2App").controller("OrderCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("client2App").service("Order",function(){})
.controller('OrderFormCtrl', function($scope, $http) {
  $scope.foo = 'bar';
  $scope.ingredients = [];
  $scope.total = 0;
  // Here is where you call your views url from drupal.
  // If this app is not on the same domain as your Drupal install you will
  // run into CORS issues.
  $http.get('http://foo.bar').success(function(ingredients) {
    $scope.ingredients = ingredients;
  });
});