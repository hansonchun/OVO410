angular.module('kontribute.services', [])
    .service('eventService', function(eventFactory, $http) {

        var vm = this;
        var url = "http://localhost:52073/api/event";
        vm.test;
        vm.convertJson = convertJson;
        vm.getAllUsers = getAllUsers;
        vm.fetchUsers = fetchUsers;
        vm.getResult = getResult;
        vm.promise;
        vm.data;

        

        function getAllUsers() {
            fetchUsers();
         
        }


        function fetchUsers() {
            vm.promise = $http.get(url);
            vm.promise.success(function (data, status, headers, config) {
                vm.test = JSON.stringify(data);
            
            });
            
        }

        function convertJson(data) {
            vm.test = JSON.stringify(data);
         

        }
        function getResult() {
            return vm.promise; 
        }
       
       
    });