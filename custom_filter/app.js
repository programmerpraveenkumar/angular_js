var app = angular.module('filter-app',[]);
app.controller('index',function($scope){
  $scope.usernameslist = [
    {name:'praveen'},
    {name:'kumar'},
    {name:'HARI'},
    {name:'Priya'}
  ];
})
app.filter('checkmyname',function(){
  return function(input){
    //var val = "wrong name";
    //if(input == "praveen")
      //val = "you are crct";
    return "user name is \""+input+"\"";
  };
});
