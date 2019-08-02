//import ApiService from '../services/api.service';

import SelectItemModel from './../model/SelectItemModel';
export default class SearchPanel {
    startDates:SelectItemModel[];
    endDates:SelectItemModel[];
    selTypes:string;
    SelstartDate:string;
    SelendDate:string;
    selstartdate:Date;
    selenddate:Date;
    constructor(private scope:any){
        this.selTypes="1";//默认按年统计
    }
    SetSelTypes(){
       let td:Date =new Date();
switch(this.selTypes){
    case "1":
           this.startDates=[];this.endDates=[];
        for(let x:number=td.getFullYear();x>=2015; x--){
            let item1:SelectItemModel=new SelectItemModel(x.toString(),x.toString()+'-1-1');
            let item2:SelectItemModel=new SelectItemModel(x.toString(),x.toString()+'-12-31');
         this.startDates.push(item1);
         this.endDates.push(item2);
        }
        this.SelstartDate=this.startDates[0].value;
        this.SelendDate=this.endDates[0].value;
        break;
        case "2":
     let minDate:Date=new Date( td.setMonth(td.getMonth()-12));
     this.startDates=[];this.endDates=[];
     for(let x:Date=td;x>=minDate;x=new Date(x.setMonth(x.getMonth()-1))){
         let name:string=x.getFullYear()+x.getMonth()>8?(x.getMonth()+1).toString():'0'+(x.getMonth()+1).toString();
         let value:string=x.getFullYear()+'-'+(x.getMonth()+1).toString()+'1';
         let item:SelectItemModel=new SelectItemModel(name,value);
         this.startDates.push(item);
         this.endDates.push(item);
     }
this.SelstartDate=this.startDates[0].value;
this.SelendDate=this.endDates[0].value;
            break;
            case "3":

                break;
                default:
                    return;
}

    }
  
    static Link(scope, element, attrs){
        element.css({color:'red'});
    }
    static Factory(){
        return {
            scope: {
                name: '='
            },
            link: SearchPanel.Link,
            controller: SearchPanel,
            controllerAs: 'SearchPancelCtrl',
            templateUrl: `views/directives/searchpanel.html`
        }
    }
}

SearchPanel.$inject = ['$scope'];