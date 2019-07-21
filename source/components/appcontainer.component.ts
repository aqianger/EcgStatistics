export default class AppcontainerComponent {
    itemtype:string;
    static $inject = ["$state"];
    constructor(private state) {
        console.log(state.current.name);
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
        //console.log('app init');
   
        
    }
    static Factory() {
        return {
            controller: AppcontainerComponent,
            templateUrl: 'views/components/appcontainer.html'
        };
    }
}