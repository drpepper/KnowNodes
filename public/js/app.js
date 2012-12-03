'use strict';


// Declare app level module which depends on filters, and services
/*angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives']).
 config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
 $routeProvider.when('/view1', {templateUrl: 'partials/partial1', controller: MyCtrl1});
 $routeProvider.when('/view2', {templateUrl: 'partials/partial2', controller: MyCtrl2});
 $routeProvider.otherwise({redirectTo: '/view1'});
 $locationProvider.html5Mode(true);
 }]);
 */

// Declare app level module which depends on filters, and services
angular.module('KnowNodesApp', ['KnowNodesApp.filters', 'KnowNodesApp.services', 'KnowNodesApp.directives']).
    config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.
        when('/', {
            templateUrl: 'partials/index',
            controller: IndexCtrl
        }).
        when('/addUser', {
            templateUrl: 'partials/addUser',
            controller: AddUserCtrl
        }).
        when('/addPost', {
            templateUrl: 'partials/addPost',
            controller: AddPostCtrl
        }).
        when('/readPost/:id', {
            templateUrl: 'partials/readPost',
            controller: ReadPostCtrl
        }).
        when('/editPost/:id', {
            templateUrl: 'partials/editPost',
            controller: EditPostCtrl
        }).
        when('/deletePost/:id', {
            templateUrl: 'partials/deletePost',
            controller: DeletePostCtrl
        }).
        otherwise({
            redirectTo: '/'
        });
    $locationProvider.html5Mode(true);
}]);