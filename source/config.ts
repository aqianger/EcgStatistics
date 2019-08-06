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
    .state('consultation',{
        url:'/consultation',
        template:"<consultation></consultation>"
    })
    .state('devices',{
        url:'/devices',
        template:"<devices></devices>"
    })
    .state("positiverate",{
        url:'/positiverate',
        template:"<positiverate></positiverate>"
    })
    .state("drworkload",{
        url:"/drworkload",
        template:"<drworkload></drworkload>"
    })
}

config.$inject = ['$locationProvider', '$stateProvider', '$urlRouterProvider'];

export default config;