/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var myApp = angular.module("myModule", []);
myApp.controller("myControl", function ($scope, $window, $interval) {

    $scope.DisplayAlert = function (message) {
        $window.alert(message);
    };
    $scope.DisplayPrompt = function () {
        var name = $window.prompt('Enter Name');
        $window.alert(name);
    };
    $scope.count = 0;
    $interval(function () {
        $scope.count = $scope.count + 2;
    }, 1000);
});
