var app = angular.module('filter-app',[]);
app.controller('index',function($scope){
  $scope.usernameslist = [
    {name:'praveen'},
    {name:'kumar'},
    {name:'HARI'},
    {name:'Priya'}
  ];
})
app.controller('childern_filter',function($scope){
  
  $scope.usernameslist = [
    {name:'praveen',age:'15'},
    {name:'kumar',age:'25'},
    {name:'HARI',age:'25'},
    {name:'Priya',age:'25'}
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
//
