export default class MainSidebarComponent {
    curstate:string;
    constructor(private scope:any,private state:any) { 
    
    }
    $onInit(){
        this.curstate=this.state.current.name;
        let self=this;
        this.scope.$on('statechange', function(d,v) {
           console.log(d,v);
           self.curstate=v.stateName;
        });
    }
    static Factory() {
        return {
            controller: MainSidebarComponent,
            templateUrl: 'views/components/main-sidebar.html'
        };
    }
}
MainSidebarComponent.$inject = ['$scope',"$state","$rootScope"];