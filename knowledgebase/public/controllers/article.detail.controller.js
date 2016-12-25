/**
 * Created by Vishw on 12/24/2016.
 */
(function(){
    'use strict'

    angular.module('myApp')
        .controller('ArticleDetailController',['$http','$routeParams','$location',function ($http,$routeParams,$location) {
            var adc =this;
            $http.get('/articles/'+$routeParams.id).then(function (response) {
                adc.articles = response.data;
            });
            adc.removeArticle = function () {
                $http.delete('/articles/'+$routeParams.id).then(function(response){
                    console.log(response.status);
                });
                $location.path('/articles');
            }
        }])
})();