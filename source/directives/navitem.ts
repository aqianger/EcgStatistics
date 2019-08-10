import ApiService from './../services/api.service';
import MyService from './../services/my.service';
import {baseUrl} from '../config';
export default class navItem {
    
    constructor(private myService:MyService,private apiService:ApiService, scope){
        
    }
    do(){
        this.myService.do();
    }
    static Link(scope, element, attrs){
        element.css({color:'red'});
    }
    static Factory(){
        return {
            transclude:true,
            replace:true,
            scope: {
                name: '=',
                navClass:'@',
                countLabel:'@',
                icon:'@',
                count:'=',
                title:'=',
                footer:'='
            },
            link: navItem.Link,
            controller: navItem,
            controllerAs: 'navItemCtrl',
            templateUrl:baseUrl+ 'views/directives/navitem.html'
        }
    }
}

navItem.$inject = ['myService', 'apiService', '$scope'];