$(document).foundation();

var myApp = angular.module('application', [])


myApp.controller('testCon', function testCon($scope, $http) {
  $scope.search = {};
  $http.get("https://randomuser.me/api/?results=5&nat=us") //a free restfull api place to get fake live user data
    .then(function(response) {
      $scope.results = response.data;
      var i = $scope.results.results.length - 1;
      $scope.unames = []; //must create an array to host our data.

      for (var k = 0; k <= i; k++) {
        //step through the api results and pull the data I wish to display.
        $scope.unames.push({
          //this is like recreating a json formatted array in an easier way for showing in the view.
          user: $scope.results.results[k].login.username,
          fname: $scope.results.results[k].name.first,
          lname: $scope.results.results[k].name.last,
          photo: $scope.results.results[k].picture.medium
        });


      }

    });
});
