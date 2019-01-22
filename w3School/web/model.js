/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var apps=angular.module("myApp", []);
apps.controller("myCtrl2", function ($scope){
    
    $scope.names=['Emai','Round','Gender'];
    $scope.cars={
        car1:{brand:'food', model:'500', color:'red'},
        car2:{brand:'Fial', model:'608', color:'white'},
        car3:{brand:'Volv', model:'900', color:'black'}
    };
});
