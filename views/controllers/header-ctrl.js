'use strict';

(() => {
    angular
        .module('app')
        .controller('NavCtrl', NavCtrl);

    NavCtrl.$inject = ['$rootScope', '$scope', '$state', '$stateParams'];

    function NavCtrl ($rootScope, $scope, $state, $stateParams){
        var vm             = this;
        $scope.curr =0;
      
        vm.data = [];
        vm.data[0] = {
        	'type':  'Rock Slide',
        	'place' : 'Jamboree Rd, Los Banos, Laguna',
        	'date' : 1526755381,
        	'description': 'A landslide caused by rock failure in which part of the bedding plane of failure passes through intact rock.'
        }
        vm.data[1] = {
        	'type':  'Earth Flow',
        	'place' : 'Jamboree Rd, Los Banos, Laguna',
        	'date' : 1526755381,
        	'description': 'A specific type of Soil Flow landslide where the majority of the soil materials are fine-grained (silt and clay) and cohesive.'
        }

        $rootScope.$on("CallShowMethod", function(index){
            console.log(index);
           $scope.showCurr(index);
        });

        $scope.add = () => {
            if($scope.curr < vm.data.length){

        		$scope.curr+=1;
            }
    		console.log($scope.curr);

        }
        $scope.showCurr = (current) => {
           $scope.curr = current;
            console.log("curr: " + current);

        }
        $rootScope.showCurr = (current) => {
           $scope.curr = current;
            console.log("curr: " + current);
            // $state.reload();
             // $('.dropdown-button').dropdown('open');

        }

    }
})();
