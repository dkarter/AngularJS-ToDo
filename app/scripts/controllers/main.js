'use strict';

angular.module('mytodoApp')
  .controller('MainCtrl', function ($scope) {
    // Initial values
    $scope.todos = ['Item 1', 'Item 2', 'Item 3'];
    $scope.showApp = false;

    $scope.addTodo = function() {
      $scope.todos.push($scope.todo);
      $scope.todo = '';
    };

    $scope.showToDoApp = function(){
      if (!$scope.showApp) {
        $scope.showApp = true;
      } else {
        $scope.showApp = false;
      }
    };

    $scope.removeTodo = function(index) {
      $scope.todos.splice(index, 1);
    };

  });
