function config(locationProvider, stateProvider, urlRouterProvider) {
    locationProvider.html5Mode(true);
	urlRouterProvider.otherwise('/home');

    stateProvider.state('home', {
        url:'/home',
        template: '<home></home>'
    })
    .state('login',{
        url:'/login',
        template:"<login></login>"
    })
    .state('calendar', {
        url: '/calendar',
        template: '<calendar></calendar>'
    })
}

config.$inject = ['$locationProvider', '$stateProvider', '$urlRouterProvider'];

export default config;