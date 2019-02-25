var app = angular.module('expensesApp', []);

app.controller('ExpensesViewController', ['$scope', function($scope){
  $scope.items = [
    {
      name:'pizza',
      ingredients: ['cheese', 'pepperoni', 'sausage','mushroom']
    },
    {
      name:'sushi',
      ingredients: ['shrimp', 'spicy mayo', 'seaweed','rice']
    },
    {
      name:'poke',
      ingredients: ['shrimp', 'spinach', 'pineapple','cilantro']
    }

  ];



}]);
