app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: './home/home.html'
        });
    $urlRouterProvider.otherwise('/home');
});
