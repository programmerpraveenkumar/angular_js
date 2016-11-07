var app = angular.module('custom-directive',[]);

app.directive("showLink",[function(){
  return {
      template:"<a href=\"google.com\">some linke</a>"
  };
}]);
app.directive("replaceDirective",[function(){
  return {
      template:"<a href=\"google.com\">some linke</a>",
      replace:true
  };
}])
