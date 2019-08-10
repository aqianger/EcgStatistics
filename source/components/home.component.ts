import {baseUrl} from '../config';
export default class HomeComponent {
    message: string;
    constructor() {
        this.message = 'Welcome';
    }

    $onInit(){}

    static Factory() {
        return {
            controller: HomeComponent,
            templateUrl:baseUrl+ 'views/components/home.html'
        };
    }
}