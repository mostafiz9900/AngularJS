/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var myApp = angular.module("myModule", []);
//var myController = function ($scope) {
//    $scope.msg = "Hello World";
//};
//myApp.controller("myCtrl", myController);

myApp.controller("myCtrl", function ($scope){
    $scope.msg = "Hello Angular..........";
    var student={
        name:"Mostafizur",
        score:22
    }
    $scope.stu=student;
    $scope.msg2="student name";
    $scope.var1="1";
    
    var  fruits=['a', 'c', 'd', 'e' ];
    $scope.fruits=fruits;
    var emp=[{
            name:"Mostafiz",
            salary:25000,
            position:"Manager"
        },{
            name:"Mostafiz",
            salary:25000,
            position:"Manager"
        },{
            name:"Mostafiz",
            salary:25000,
            position:"Manager"
        }
];
$scope.employees=emp;

var country=[
    {
        name:'Sawden',
        city:[
            {name:'Stockhol'},
            {name:'Upsala'},
            {name:'Gotenberg'}
        ]
    },{
        name:'Bangladesh',
        city:[
            {name:'Dhaka'},
            {name:'Khulna'},
            {name:'Panbna'}
        ]
    }
];
$scope.count=country;
var image="mostafiz.png";
$scope.img=image;
var image2="sumaiya.jpg";
$scope.img2=image2;
});