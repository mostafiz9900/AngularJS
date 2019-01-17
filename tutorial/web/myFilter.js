/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
myApp.filter('status', function () {
    return function (status) {
        if (status == 1) {
            return "Paid";

        }
        if (status == 2) {
            return "Unpaid";

        }
        if (status == 3) {
            return "Deducted from advance";

        }
    };
});

