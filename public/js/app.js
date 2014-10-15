
var app = angular.module('Application', ['ngSanitize', 'ui.bootstrap', 'ui.router', 'ngCkeditor']);

app.filter('htmlToPlaintext', function() {
    return function(text) {
        $string = String(text).replace(/<[^>]+>/gm, '');
        return String($string).replace(/&nbsp;/, '');
    };
});

app.config(function($stateProvider, $urlRouterProvider) {
//
// For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/main");
//
// Now set up the states
    $stateProvider
            .state('main', {
                url: "/main",
                templateUrl: "partial/main.html",
                controller: 'MainController'
            })
            .state('faculty', {
                url: "/faculty",
                templateUrl: "partial/Faculty/faculty.html",
                controller: 'FacultyController'
            })
            .state('faculty.add', {
                url: "/add",
                templateUrl: "partial/Faculty/faculty.form.html",
                controller: 'FacultyFormController'
            })
            .state('faculty.edit', {
                url: "/edit/:facultyId",
                templateUrl: "partial/Faculty/faculty.form.html",
                controller: 'FacultyFormController'
            })
            .state('researcher', {
                url: "/researcher",
                templateUrl: "partial/Researcher/researcher.html",
                controller: 'ResearcherController'
            })
            .state('researcher.add', {
                url: "/add",
                templateUrl: "partial/Researcher/researcher.form.html",
                controller: 'ResearcherFormController'
            })
            .state('researcher.edit', {
                url: "/edit/:researcherId",
                templateUrl: "partial/Researcher/researcher.form.html",
                controller: 'ResearcherFormController'
            });

});