var module = angular.module('ghdisco', []);

function discoController($scope, $http) {
    $scope.days = [];

    $scope.loadContrib = function() {
        $http.jsonp('https://github.com/users/teo-sk/contributions_calendar_data?callback=JSON_CALLBACK', 
            {headers: {'Accept': 'application/json'}}).success(function(data){
            console.log(data);
        });
    }

}
