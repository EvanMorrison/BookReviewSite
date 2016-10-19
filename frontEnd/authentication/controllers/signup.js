/* BookReviewSite signup.js */

angular.module('myApp.Auth')
    .controller('SignupController', ["$scope", "$location", "$timeout", "$uibModal", "$uibModalInstance", "UserService", function ($scope, $location, $timeout, $uibModal, $uibModalInstance, UserService) {
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
                        console.log('Ctrl response ', response);
                        if (response.success === false  && response.message === 'That email is in use already.') {
                            $scope.duplicate = true;
                        } else {
                            $scope.success = true
                            $timeout(function () {
                                UserService.user.email = $scope.user.email;
                                $scope.login();
                            }, 2000);
                        }
                    }, function (error) {
                        console.log('Ctrl error msg ', error);
                    })
            }
        }

        $scope.login = function () {
            $uibModalInstance.close();
            $uibModal.open({
                templateUrl: '/authentication/templates/login.html',
                controller: 'LoginController'
            });
        }

        $scope.dismiss = function () {
            $uibModalInstance.dismiss();
        }
    }])