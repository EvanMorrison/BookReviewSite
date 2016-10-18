/* BookReviewSite login.js */

angular.module('myApp.Auth')
.controller('LoginController', ["$scope", "$location", "$uibModal", "$uibModalInstance", "UserService", function($scope, $location, $uibModal, $uibModalInstance, UserService) {
    
    $scope.login = function() {
        UserService.login($scope.user)
        .then(function(response){
            $uibModalInstance.close();
            $location.path('user/home');
            console.log('login ', response);
        })
    }

}])