angular.module('weatherApp')
      .directive('currentWeather', currentWeather);

  function currentWeather() {
    var directive = {
      scope: {
        city: '@'
      },
      restrict: 'E',
      replace: true,
      templateUrl: '/templates/currentWeather.html',
      controllerAs: 'weatherCtrl',
      controller: ['$http', function($http) {
        var vm = this;
        var url="http://api.openweathermap.org/data/2.5/weather?mode=json&cnt=7&units=imperial&callback=JSON_CALLBACK&q=";
        var myKey = "2214ab070f7d6d7cad7a0e0129e0c8a6";
        var apiKey = "&appid=";
        vm.getWeather = function(city) {
          $http({
            method: 'JSONP',
            url: url + city + apiKey + myKey
          }).then(function successCallback(data){
            vm.weather = data;
          });
        };
      }]
    };
    return directive;
  }
