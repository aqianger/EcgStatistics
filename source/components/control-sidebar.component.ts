import {baseUrl} from '../config';
export default class ControlSidebarComponent {
    constructor() { }
    $onInit(){
        //console.log('control sidebar init');
    }
    static Factory() {
        return {
            controller: ControlSidebarComponent,
            templateUrl:baseUrl+ 'views/components/control-sidebar.html'
        };
    }
}