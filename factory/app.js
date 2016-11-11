var app  = angular.module("factory_app",[]);
app.factory("fac_name",function(){
  var private_function=function(){
    return "some private value";
  }
  var obj = {}
  obj.name  = "vailebl praveen kumar";
  obj.name_method = function(){
    return "praveen kumar";
  }
  obj.samplemethod=function(){
    return obj.name_method()+" value of the method";
  }
  return obj;
});

app.controller('initial',function($scope,fac_name){
  $scope.fac_val = 'intial value';
  $scope.after_click = function(){
    //cant access private function
    $scope.fac_val = fac_name.samplemethod();
  }
})
