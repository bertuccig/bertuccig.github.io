(function () {
'use strict';

    var MAX_MEALS = 3;
    var EMPTY_MESSAGE = "";
    var RIGHT_MESSAGE = "Enjoy!";
    var TOO_MANY_MESSAGE = "Too much!";
    
    angular
        .module('LunchCheck', [])
        .controller('LunchCheckController', function ($scope) {

            $scope.message = EMPTY_MESSAGE;
            $scope.meals = "";
            $scope.calc = function() {
              
                $scope.message = getMessage();
            };
        
            function getMessage() {
              
                var total = $scope.meals.split(',').length;

//                if(total == 0) return EMPTY_MESSAGE;
                
                if(total > MAX_MEALS) return TOO_MANY_MESSAGE;
                else return RIGHT_MESSAGE;
            };
            
        });

    
})();
