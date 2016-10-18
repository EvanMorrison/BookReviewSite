/* BookReviewSite signup.js */

angular.module('myApp.Auth')
    .controller('SignupController', ["$scope", "$location", "$timeout", "$uibModal", "$uibModalInstance", "UserService", function ($scope, $location, $timeout, $uibModal, $uibModalInstance, UserService) {
        $scope.user = {};
        $scope.invalidForm = false;
        $scope.signup = function () {
            if($scope.signupForm.$invalid) {
                    $scope.invalidForm = true;
                $timeout(function () {
                    $scope.invalidForm = false;
                }, 3500);
                return;
            }
            else {
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
        }
    }])