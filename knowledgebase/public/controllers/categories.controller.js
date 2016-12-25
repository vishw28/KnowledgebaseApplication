/**
 * Created by Vishw on 12/22/2016.
 */

(function () {
    angular.module('myApp')
        .controller('CategoriesController',['$http',function ($http) {
            var cc =this;
            $http.get('/categories').then(function (response) {
                    cc.categories = response.data;
            });
        }]);
})();