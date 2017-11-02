angular.module('starships').controller('shipsCtrl', function($scope, shipSrvc){
    // $scope.ships = [
    //     'X-wing',
    //     'T-fighter',
    //     'Millenial Falcon',
    //     'Death Star'
    // ];

    shipSrvc.getShips().then(ships => {
        $scope.ships = ships
    })

    $scope.getId = shipSrvc.getId;
})