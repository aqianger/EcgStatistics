export default class LoginLayerComponent {
    constructor() { }
    $onInit(){
        //console.log('app init');
    }
    static Factory() {
        return {
            controller: LoginLayerComponent,
            templateUrl: 'views/login/loginlayer.html'
        };
    }
}