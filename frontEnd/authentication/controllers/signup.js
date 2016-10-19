/* BookReviewSite signup.js */

angular.module('myApp.Auth')
    .controller('SignupController', ["$scope", "$timeout", "$uibModal", "$uibModalInstance", "UserService", function ($scope, $timeout, $uibModal, $uibModalInstance, UserService) {
        $scope.user = {};
        $scope.invalidForm = false;
        
        $scope.signup = function (e) {
            e.preventDefault();
            $scope.duplicate = false;
            if ($scope.signupForm.$invalid) {
                $scope.invalidForm = true;
                $timeout(function () {
                    $scope.invalidForm = false;
                }, 3500);
                return;
            } else {
                UserService.signup($scope.user)
                    .then(function (response) {
                        if (response.success === false  && response.message === 'That email is in use already.') {
                            $scope.duplicate = true;
                        } else {
                            $scope.success = true
                            UserService.newSignin = true;
                            $timeout(function () {
                                UserService.user.email = $scope.user.email;
                                $scope.showLogin();
                            }, 2000);
                        }
                    })
            }
        }

        $scope.showLogin = function () {
            $uibModalInstance.close();
            $uibModal.open({
                templateUrl: '/authentication/templates/login.html',
                controller: 'LoginController',
            });
        }

        $scope.dismiss = function () {
            $uibModalInstance.dismiss();
        }
    }])