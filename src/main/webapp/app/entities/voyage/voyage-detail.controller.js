(function() {
    'use strict';

    angular
        .module('jeanne2App')
        .controller('VoyageDetailController', VoyageDetailController);

    VoyageDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'previousState', 'entity', 'Voyage', 'Segment', 'Routes', 'Car', 'Train', 'Itineraire'];

    function VoyageDetailController($scope, $rootScope, $stateParams, previousState, entity, Voyage, Segment, Routes, Car, Train, Itineraire) {
        var vm = this;

        vm.voyage = entity;
        vm.previousState = previousState.name;

        var unsubscribe = $rootScope.$on('jeanne2App:voyageUpdate', function(event, result) {
            vm.voyage = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();