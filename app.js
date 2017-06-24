(function () {
'use strict';

    angular
        .module('LunchCheck', [])
        .controller('LunchCheckController', function ($scope) {

            $scope.total = 0;
            $scope.calc = function() {
              
                $scope.total = $scope.pippo.split(',').length;
            };
        });
    
})();
