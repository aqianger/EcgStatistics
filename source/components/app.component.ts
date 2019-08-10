import {baseUrl} from '../config';
export default class AppComponent {
    constructor() { }
    $onInit(){
        //console.log('app init');
    }
    static Factory() {
        return {
            controller: AppComponent,
            templateUrl: baseUrl+'views/components/app.html'
        };
    }
}