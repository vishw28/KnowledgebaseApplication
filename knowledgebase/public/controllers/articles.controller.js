/**
 * Created by Vishw on 12/22/2016.
 */
(function () {
    angular.module('myApp')
        .controller('ArticlesController',['$http',function ($http) {
            var ac =this;
            $http.get('/articles').then(function (response) {
                ac.articles = response.data;
            });
        }])
})();