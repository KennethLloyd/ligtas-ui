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
            'img_path': '../images/rockslide.jpg',
        	'type':  'Rock Slide',
        	'place' : 'Jamboree Rd, Los Banos, Laguna',
        	'date' : 'May 21, 2018 10:00 AM PST',
        	'description': 'A landslide caused by rock failure in which part of the bedding plane of failure passes through intact rock.'
        }
        vm.data[1] = {
            'img_path': '../images/earthflow.jpg',
        	'type':  'Earth Flow',
        	'place' : 'Mayondon, Los Banos, Laguna',
        	'date' : 'May 18, 2018 07:00 AM PST',
        	'description': 'A specific type of Soil Flow landslide where soil materials are fine-grained (silt and clay) and cohesive.'
        }
        vm.data[2] = {
            'img_path': '../images/slump.jpg',
            'type':  'Slump',
            'place' : 'Bayog, Los Banos, Laguna',
            'date' : 'May 12, 2018 08:00 PM PST',
            'description': 'A form of mass wasting that occurs when rock layers moves a short distance down a slope.'
        }

        $rootScope.$on("CallShowMethod", function(index){
            console.log(index);
           $scope.showCurr(index);
        });

        $scope.next = () => {
            if($scope.curr < vm.data.length-1){
        		$scope.curr+=1;
            }
        }

        $scope.prev = () => {
            if($scope.curr > 0){

                $scope.curr-=1;
            }
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
