function config(locationProvider, stateProvider, urlRouterProvider) {
    locationProvider.html5Mode(true);
	urlRouterProvider.otherwise(baseUrl+'home');

    stateProvider.state('home', {
        url:baseUrl+'home',
        template: '<overall></overall>'
    })
    .state('login',{
        url:baseUrl+'login',
        template:"<login></login>"
    })
    .state('regional', {
        url: baseUrl+'regional',
        template: '<regional></regional>'
    })
    .state('consultation',{
        url:baseUrl+'consultation',
        template:"<consultation></consultation>"
    })
    .state('devices',{
        url:baseUrl+'devices',
        template:"<devices></devices>"
    })
    .state("positiverate",{
        url:baseUrl+'positiverate',
        template:"<positiverate></positiverate>"
    })
    .state("drworkload",{
        url:"/statistics/drworkload",
        template:"<drworkload></drworkload>"
    })
}

config.$inject = ['$locationProvider', '$stateProvider', '$urlRouterProvider'];
//export const baseUrl:string="/statistics/";
export const baseUrl:string="/";
export default config;