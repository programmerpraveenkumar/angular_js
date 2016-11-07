var app = angular.module('comp-app',[]);
app.component('phoneLink',{
template:['$element','$attrs',function($element,$attrs){
  return '<a target="{{$ctrl.linktype}}" href="http://'+$attrs['link']+'">'+$attrs['name']+'</a>';
}],
controller:function testpraveen(){
  this.linktype = "__parent"
}
});
