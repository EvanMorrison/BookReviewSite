

angular.module("myApp")
.directive('navbar', ["UserService", function(UserService) {
    return {
        templateUrl: 'evanTempComponents/navbar.html',
        link: function(scope, elem, attrs) {
            scope.userService = UserService;
        }
    }
}]);