import {baseUrl} from '../config';
export default class LoginLayerComponent {
    constructor() { }
    $onInit(){
        //console.log('app init');
    }
    static Factory() {
        return {
            controller: LoginLayerComponent,
            templateUrl:baseUrl+ 'views/login/loginlayer.html'
        };
    }
}