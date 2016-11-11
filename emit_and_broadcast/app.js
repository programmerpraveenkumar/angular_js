var app = angular.module("emit-broadcast",[]);
app.controller('ParentCtrl',function($scope){
  $scope.sendEvent=function() {
    $scope.$broadcast('handlebroad',{message:"this is sample message from parent"});
  };
$scope.$on("handleEmit",function(event,args){
    console.log("event catch successfully and message is "+args['message']);
})

});
app.controller('SiblingoneCtrl',function($scope){
$scope.sendEvent=function() {
  $scope.$emit('handleEmit',{message:"this is sample message from child"});
};
//
$scope.$on("handlebroad",function(event,args){
    console.log("event catch successfully in child1 controller and message is "+args['message']);
})

});
app.controller('SiblingTwoCtrl',function($scope){
  $scope.$on("handlebroad",function(event,args){
      console.log("event catch successfully in child2 controller and message is "+args['message']);
  })
});
