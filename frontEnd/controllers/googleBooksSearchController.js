angular.module("BookReviewApp")
    .controller("GoogleBooksSearchController", ["$scope", "HttpService", "$timeout", function ($scope, HttpService, $timeout) {

        $scope.search = {};
        $scope.resultsList = [];
        $scope.searchParams = '';

        $scope.searchGoogle = function () {
            for (var key in $scope.search) {
                if ($scope.search[key].length) {
                    $scope.searchParams += '+' + key + ':' + $scope.search[key]
                }
            }
            HttpService.searchGoogle($scope.searchParams)
                .then(function (response) {
                    $scope.searchParams = '';
                    if (Array.isArray(response)) $scope.resultsList = response;
                    else $scope.error = response.data.message;
                })
        }

        $scope.saveBook = function (book) {
            HttpService.saveBook(book)
                .then(function (response) {
                    if (response.status === 200) {
                        $scope.success = true;
                        $timeout(function () {
                            $scope.success = false;
                        }, 2500)
                    }
                })
        }


        $scope.clearSearch = function () {
            $scope.search = {};
            $scope.searchParams = '';
            $scope.resultsList = [];
        }

    }])
