/**
 * Created by Vishw on 12/24/2016.
 */
(function(){
    'use strict'

    angular.module('myApp')
        .controller('ArticlesCreateController',['$http','$location',function ($http,$location) {
            var acc = this;
            $http.get('/categories').then(function (response) {
                acc.categories = response.data;
            });

            acc.addArticle = function () {
                var data ={
                    title :acc.title,
                    body :acc.body,
                    category: acc.category
                }
                $http.post('/articles',data).then(function (response) {
                    console.log(response.status);
                });
                $location.path('/articles');
            }
        }])
})();
