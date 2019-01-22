/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var myApp = angular.module('myModule', []);
//var myController = function ($scope) {
//    $scope.msg = "Hello World";
//};
//myApp.controller("myCtrl", myController);


myApp.controller("myCtrl", function ($scope) {
    $scope.msg = "Hello Angular..........";
    var student = {
        name: "Mostafizur",
        score: 22
    }
    $scope.stu = student;
    $scope.msg2 = "student name";
    $scope.var1 = "1";

    var fruits = ['a', 'c', 'd', 'e'];
    $scope.fruits = fruits;
    var emp = [{
            name: "Mostafiz",
            salary: 25000,
            position: "Manager"
        }, {
            name: "Mostafiz",
            salary: 25000,
            position: "Manager"
        }, {
            name: "Mostafiz",
            salary: 25000,
            position: "Manager"
        }
    ];
    $scope.employees = emp;

    var country = [
        {
            name: 'Sawden',
            city: [
                {name: 'Stockhol'},
                {name: 'Upsala'},
                {name: 'Gotenberg'}
            ]
        }, {
            name: 'Bangladesh',
            city: [
                {name: 'Dhaka'},
                {name: 'Khulna'},
                {name: 'Panbna'}
            ]
        }
    ];
    $scope.count = country;
    var image = "mostafiz.png";
    $scope.img = image;
    var image2 = "sumaiya.jpg";
    $scope.img2 = image2;

//    var employees = [
//        {name: 'Mostafizur', salary: '40000', position: 'Exective', status: 1},
//        {name: 'Sofiq', salary: '40000', position: 'Exective', status: 2},
//        {name: 'Mahabub', salary: '30000', position: 'Exective', status: 3},
//        {name: 'Rojina', salary: '500000', position: 'Exective', status: 2},
//        {name: 'Ajat', salary: '40000', position: 'Exective', status: 1},
//        {name: 'Moly', salary: '20000', position: 'Exective', status: 3},
//        {name: 'Mehedi', salary: '40000', position: 'Exective', status: 1},
//        {name: 'Arefin', salary: '45000', position: 'Exective', status: 2}
//    ];
   $scope.emp = employees;
//    $scope.showData=function (){
//        console.log('showing data....');
//         $scope.emp = employees;
//    };
//    $scope.hideData=function (){
//        console.log('hiding data....');
//         $scope.emp = '';
//    };
});