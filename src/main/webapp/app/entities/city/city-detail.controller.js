(function() {
    'use strict';

    angular
        .module('jeanne2App')
        .controller('CityDetailController', CityDetailController);

    CityDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'previousState', 'entity', 'City', 'Routes'];

    function CityDetailController($scope, $rootScope, $stateParams, previousState, entity, City, Routes) {
        var vm = this;

        vm.city = entity;
        vm.previousState = previousState.name;

        var unsubscribe = $rootScope.$on('jeanne2App:cityUpdate', function(event, result) {
            vm.city = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
