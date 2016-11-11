var app  = angular.module("service_app",[]);
app.service("fac_name",function(){
    this.name = "some name";
  var private_function = function(){
    return "private  function valuel";
  }
this.samplemethod= function(){
  return private_function()+" sample value";
}
});

app.controller('initial',function($scope,fac_name){
  $scope.fac_val = 'intial value';
  $scope.after_click = function(){
    //cant access private function
    $scope.fac_val = fac_name.name+" "+fac_name.samplemethod();
  }
})
