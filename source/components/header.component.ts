import {baseUrl} from '../config';
export default class HeaderComponent {
    constructor() { }
    static Factory() {
        return {
            controller: HeaderComponent,
            templateUrl:baseUrl+ 'views/components/header.html'
        };
    }
}