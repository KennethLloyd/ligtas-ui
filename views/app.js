(function(){
    'use strict';

    angular
        .module('app', [
            'ui.router',

        ])
        .config(config);

    function config ($stateProvider, $urlRouterProvider, $locationProvider) {

        $locationProvider.hashPrefix('');
        $urlRouterProvider.otherwise('/main');
        $stateProvider
            .state('app', {
                abstract:true,
                url : '/',
                views : {
                    'topbar' : {
                        templateUrl  : 'components/header.html',
                        controller   : 'NavCtrl',
                        controllerAs : 'vm'
                    },
                    'content' : {
                        templateUrl  : 'components/content.html',
 
                    }
                }
            })
            .state('app.main', {
                url             : 'main',
                templateUrl     : 'components/map.html',
                controller      : 'MapCtrl',
                controllerAs    : 'vm'
            })
    }

})();