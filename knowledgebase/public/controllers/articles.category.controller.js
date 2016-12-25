/**
 * Created by Vishw on 12/24/2016.
 */

(function(){
        'use strict'

        angular.module('myApp')
            .controller('ArticlesCategoryController',['$http','$routeParams',function ($http,$routeParams) {
                var acc =this;
                $http.get('/articles/category/'+$routeParams.category).then(function (response) {
                    acc.cat_articles = response.data;
                    acc.category = $routeParams.category;
        });
    }])
})();
