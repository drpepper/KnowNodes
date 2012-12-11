'use strict';

/* Controllers */

function AppCtrl($scope, $http) {
  $http({method: 'GET', url: '/api/name'}).
  success(function(data, status, headers, config) {
    $scope.name = data.name;
  }).
  error(function(data, status, headers, config) {
    $scope.name = 'Error!'
  });
}

function MyCtrl1() {}
MyCtrl1.$inject = [];


function MyCtrl2() {}
MyCtrl2.$inject = [];


// Users:
function AddUserCtrl($scope, $http, $location) {
    $scope.form = {};
    $scope.submitUser = function () {
        $http.post('/API/users', $scope.form).
            success(function(data){
                $location.path('/');
            });
    }
}

//knownode Source:
function AddSourceCtrl($scope, $http, $location) {
    $scope.form = {};
    $scope.submitSource = function () {
        $http.post('/API/knownodes', $scope.form).
            success(function(data) {
                $location.path('/AddEdge');
            });
    }
}

function AddEdgeCtrl($scope, $http, $location){
    $scope.form = {};
    $scope.submitSource = function () {
        $http.post('/API/knownodes/edge', $scope.form).
            success(function(data) {
                $location.path('/AddSource');
            });
    }
}

function IndexCtrl($scope, $http) {
  $http.get('/api/users').
    success(function(data, status, headers, config) {
      $scope.users = data.users;
    });
}
 
function AddPostCtrl($scope, $http, $location) {
  $scope.form = {};
  $scope.submitPost = function () {
    $http.post('/api/post', $scope.form).
      success(function(data) {
        $location.path('/');
      });
  };
}
 
function ReadPostCtrl($scope, $http, $routeParams) {
  $http.get('/api/post/' + $routeParams.id).
    success(function(data) {
      $scope.post = data.post;
    });
}
 
function EditPostCtrl($scope, $http, $location, $routeParams) {
  $scope.form = {};
  $http.get('/api/post/' + $routeParams.id).
    success(function(data) {
      $scope.form = data.post;
    });
    
  $scope.editPost = function () {
    $http.put('/api/post/' + $routeParams.id, $scope.form).
      success(function(data) {
        $location.url('/readPost/' + $routeParams.id);
      });
  };
}
 
function DeletePostCtrl($scope, $http, $location, $routeParams) {
  $http.get('/api/post/' + $routeParams.id).
    success(function(data) {
      $scope.post = data.post;
    });
    
  $scope.deletePost = function () {
    $http.delete('/api/post/' + $routeParams.id).
      success(function(data) {
        $location.url('/');
      });
  };
  
  $scope.home = function () {
    $location.url('/');
  };
}
