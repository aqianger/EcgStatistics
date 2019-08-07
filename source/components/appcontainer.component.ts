export default class AppcontainerComponent {
    itemtype:string;
    static $inject = ["$state","$scope","$rootScope"];
    constructor(private state,private scope,private rootScope) {
       scope.curstate=state.current.name;
        switch(state.current.name){
            case "login":
                this.itemtype="0";
                break;
        default:
            this.itemtype="1";
            break;
        }
     }
    $onInit(){
        console.log('app init');
        let self=this;
        this.scope.$watch(function(){
            return self.state.$current.name
        }, function(newVal, oldVal){
            //do something with values
            console.log(newVal);
         self.rootScope.$broadcast('statechange',{stateName:newVal});
        }) 
        
    }
    static Factory() {
        return {
            controller: AppcontainerComponent,
            templateUrl: 'views/components/appcontainer.html'
        };
    }
}