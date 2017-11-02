angular.module('starships').service('shipSrvc', function($http){
this.getShips = function(){
    return $http.get('https://swapi.co/api/starships/').then(response => {
        return response.data.results;
    }).catch(err => {
        console.log('err', err)
    })
}

this.getShip = function(id){
    return $http.get(`https://swapi.co/api/starships/${id}`).then(response => {
        return response.data;
    }).catch(err => {
        console.log('err', err)
    })
}

this.getId = function(ship){
    // ship.url https://swapi.co/api/starships/5/
    // start with ship obj

    let split =  ship.url.split('/')
    return split[split.length-2]*1;

    // return ship Id
}
})