/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var app=angular.module("myApp", []);
app.controller("myCon", function($scope){
    $scope.names=[
        {name:'Mostafiz', country:'Bangladesh'},
        {name:'Sofiqul', country:'A'},
        {name:'Mehede', country:'B'},
        {name:'Mortuza', country:'C'},
        {name:'Jubayer', country:'D'},
        {name:'MOly', country:'E'},
       {name:"Mahabub", country:"Denmark"}
    ];
});



