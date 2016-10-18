/* BookReviewSite signup.js */

angular.module('myApp.Auth')
    .controller('SignupController', ["$scope", "$location", "$timeout", "$uibModal", "$uibModalInstance", "UserService", function ($scope, $location, $timeout, $uibModal, $uibModalInstance, UserService) {
        $scope.user = {};
        $scope.signup = function () {
            UserService.signup($scope.user)
                .then(function (response) {
                    $scope.success = response.success;
                    $timeout(function () {
                        $uibModalInstance.close();
                        $uibModal.open({
                            templateUrl: '/authentication/templates/login.html',
                            controller: 'LoginController'
                        });
                    }, 2000);
                })
        }
    }])