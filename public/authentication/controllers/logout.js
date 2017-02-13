/* BookReviewSite logout.js */

angular.module('myApp.Auth')
.controller('LogoutController', ["$scope", "UserService", "BookReviewDataService", "TokenService", function($scope, UserService, BookReviewDataService, TokenService) {
    $scope.user = UserService.user;
    UserService.user = {};
    BookReviewDataService.userBookReviewsArray = [];
    TokenService.removeToken();

}])