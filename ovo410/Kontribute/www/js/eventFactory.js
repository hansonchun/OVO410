angular.module('kontribute.factories', [])
    .factory('eventFactory', function ($http) {

        var vm = this;
        vm.test; 
        var url = "http://localhost:52073/api/event";

        return {
            getAllUsers: function () {    
                return $http.get(url)
                .success(function (data, status, headers, config) {
                    console.log(data);
                    
                });
                  }
        };
    });



