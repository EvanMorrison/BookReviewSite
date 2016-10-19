/* BookReviewSite auth.js */

var app = angular.module('myApp.Auth', ['ngRoute', 'ngAnimate', 'ui.bootstrap']);

app.config(["$routeProvider", function($routeProvider) {
    $routeProvider
    .when('/logout', {
        templateUrl: '/authentication/templates/logout.html',
        controller: 'LogoutController'
    })
}])

app.controller('AuthController', ["$scope", "$uibModal", "UserService", function($scope, $uibModal, UserService){
    $scope.userService = UserService;
    $scope.showSignup = function() {
        $uibModal.open({
            templateUrl: '/authentication/templates/signup.html',
            controller: 'SignupController'
        });
    }

    $scope.showLogin = function() {
        $uibModal.open({
            templateUrl: '/authentication/templates/login.html',
            controller: 'LoginController'
        })
    }
}]);

app.service('TokenService', function() {
    var userToken = 'token';
    this.setToken = function(token) {
        localStorage[userToken] = token;
    }

    this.getToken = function() {
        return localStorage[userToken];
    }

    this.removeToken = function() {
        localStorage.removeItem(userToken);
    }
});

app.service('UserService', ["$http", "$location", "TokenService", function($http, $location, TokenService){
    var self = this;
    self.user = {};
    this.signup = function(userObj) {
        return $http.post('/auth/signup', userObj)
        .then(function(response) {
            return(response.data);
        }, function(error){
            console.log('UserService signup error ', error);
        });
    }

    this.login = function(userObj) {
        return $http.post('/auth/login', userObj)
        .then(function(response) {
            TokenService.setToken(response.data.token);
            self.user = response.data.user;
            return(response)
        }, function(error){
            console.log('UserService login error ', error);
            return error
        })
    }

    this.logout = function(){
        TokenService.removeToken();
        $location.path('/logout');
    }

    this.isAuthenticated = function() {
        return !!TokenService.getToken();
    }
}]);

app.factory("AuthInterceptor", ["$q", "$location", "TokenService", function($q, $location, TokenService) {
    return {
        request: function(config) {
            var token = TokenService.getToken();
            if(token) {
                config.headers = config.headers || {};
                config.headers.Authorization = "Bearer " + token;
            }
            return config;
        },
        responseError: function(response) {
            if(response.status === 401) {
                TokenService.removeToken();
                $location.path('/login');
            }
            return $q.reject(response);
        }

    }
}]);

app.config(function($httpProvider) {
    $httpProvider.interceptors.push('AuthInterceptor');
});