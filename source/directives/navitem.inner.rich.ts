//import ApiService from './../services/api.service';
import MyService from './../services/my.service';
export default class navItemInnerRich {
    
    constructor(private myService:MyService,/*private apiService:ApiService,*/ scope){
        
    }
    do(){
        this.myService.do();
    }
    static Link(scope, element, attrs){
        element.css({color:'red'});
    }
    static Factory(){
        return {
            replace:true,
            scope: {
                title:'=',
                detail:'=',
                supper:'=',
                imgurl:'=',
                imgalt:'='
            },
            link: navItemInnerRich.Link,
            controller: navItemInnerRich,
            controllerAs: 'navItemCtrl',
            templateUrl: 'views/directives/navitem.inner.rich.html'
        }
    }
}

navItemInnerRich.$inject = ['myService','$scope'];