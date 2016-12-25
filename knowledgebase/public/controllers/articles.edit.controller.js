/**
 * Created by Vishw on 12/24/2016.
 */
(function(){
    'use strict'

    angular.module('myApp')
        .controller('ArticlesEditController',['$http','$routeParams','$location',function ($http,$routeParams,$location) {
            var aec = this;
            $http.get('/categories').then(function (response) {
                aec.categories = response.data;
            });

            $http.get('/articles/'+$routeParams.id).then(function (response) {
                aec.article = response.data;
            });

            aec.updateArticle = function () {
                var data ={
                    id :$routeParams.id,
                    title :aec.article.title,
                    body :aec.article.body,
                    category: aec.article.category
                }
                console.log(data);
                $http.put('/articles',data).then(function (response) {
                    console.log(response.status);
                });
                $location.path('/articles');
            }

        }])
})();
