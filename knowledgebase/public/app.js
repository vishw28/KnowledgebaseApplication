/**
 * Created by Vishw on 12/22/2016.
 */
(function () {
    var app = angular.module('myApp',['ngRoute']);

    app.config(['$routeProvider',function ($routeProvider) {
        $routeProvider
            .when('/categories',{
                templateUrl:'views/categories.view.html',
                controller:'CategoriesController'
            })
            .when('/articles',{
                templateUrl:'views/articles.view.html',
                controller:'ArticlesController'
            })
            .when('/articles/category/:category',{
                templateUrl:'views/cat_articles.view.html',
                controller:'ArticlesCategoryController'
            })
            .when('/articles/details/:id',{
                templateUrl:'views/article_details.view.html',
                controller:'ArticleDetailController'
            })
            .when('/articles/add',{
                templateUrl:'views/add_article.view.html',
                controller:'ArticlesCreateController'
            })
            .when('/articles/edit/:id',{
                templateUrl:'views/edit_article.html',
                controller:'ArticlesEditController'
            })
            .otherwise({redirectTo:'/articles'})
    }])

})();


