angular.module('starships').config(function($stateProvider, $urlRouterProvider){
    $stateProvider.state('home', {
        url: '/',
        template: 'Home State'
    }).state('ships', {
        url: '/ships',
        // template: 'Ships State'
        templateUrl: 'app/views/ships/ships.html',
        controller: 'shipsCtrl'
    }).state('shipDetail', {
        url: '/ships/:id',
        // template: 'Ship Detail State'
        templateUrl: 'app/views/ship/ship.html',
        controller: 'shipCtrl'
    })

    $urlRouterProvider.otherwise('/');
})