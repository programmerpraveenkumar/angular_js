var app = angular.module('phonecatApp',[]);
app.controller('phoneListController',function phoneListController($scope){

  $scope.phones=[
      {
        name :"Motorola",
        desc:"this is the best brand in all"
      },
      {
        name :"Samsung",
        desc:"this is the 2nd best brand in all"
      }

  ];
});
