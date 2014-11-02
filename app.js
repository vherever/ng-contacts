var app = angular.module('contactList', ['ngRoute', 'firebase'])
 
.value('fbURL', 'https://ang-blog.firebaseio.com/')
 
.factory('Projects', function($firebase, fbURL) {
  return $firebase(new Firebase(fbURL)).$asArray();
})
 
.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      controller:'ListCtrl',
      templateUrl:'views/list.html'
    })
    .when('/edit/:contactId', {
      controller:'EditCtrl',
      templateUrl:'views/detail.html'
    })
    .when('/new', {
      controller:'CreateCtrl',
      templateUrl:'views/detail.html'
    })
    .otherwise({
      redirectTo:'/'
    });
})
 

