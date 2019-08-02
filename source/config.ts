function config(locationProvider, stateProvider, urlRouterProvider) {
    locationProvider.html5Mode(true);
	urlRouterProvider.otherwise('/home');

    stateProvider.state('home', {
        url:'/home',
        template: '<overall></overall>'
    })
    .state('login',{
        url:'/login',
        template:"<login></login>"
    })
    .state('regional', {
        url: '/regional',
        template: '<regional></regional>'
    })
}

config.$inject = ['$locationProvider', '$stateProvider', '$urlRouterProvider'];

export default config;