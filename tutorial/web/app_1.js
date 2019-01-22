/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/* global myService */

var myApp = angular.module('myModule1', []);

myApp.controller("myCtrl", function (myFactory, myService, $scope, $timeout, $interval) {
//    $scope.msg3 = "hello angular";
//    $log.info("ddddddddddddd");
//$scope.myUrl = $location.absUrl();
//$scope.myUrl = $location.host();
//$scope.myUrl = $location.pote();
    $scope.myvar2 = new Date().toLocaleTimeString();
    $interval(function () {
        $scope.myvar2 = new Date().toLocaleTimeString();
    }, 1000);
    $scope.myvar3 = new Date().toLocaleDateString();
    $interval(function () {
        $scope.myvar3 = new Date().toLocaleDateString();
    }, 12000);

    $scope.myvar = "Bangladesh";
    $timeout(function () {
        $scope.myvar = "pakisthan";
    }, 3000);


    $scope.myFunc = function (x, y) {
        $scope.result = myService.sum(x, y);
        $scope.result2 = myFactory.product(x, y);
    };
});
myApp.service("myService", function () {
    this.sum = function (x, y) {
        return Number(x) + Number(y);

    };
});
myApp.factory("myFactory", function () {
    var obj={};
    obj.product = function (x, y) {
        return Number(x) * Number(y);

    };
    return obj;
});