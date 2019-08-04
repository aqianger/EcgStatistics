//import ApiService from '../services/api.service';

import SelectItemModel from './../model/SelectItemModel';
export default class SearchPanel {
    startDates:SelectItemModel[];
    endDates:SelectItemModel[];
    selTypes:Number;
    SelstartDate:SelectItemModel;
    SelendDate:SelectItemModel;
    selstartdate:Date;
    selenddate:Date;
    datetitles:any;
    constructor(private scope:any){
        this.selTypes=1;//默认按年统计
        this.datetitles={"month":{"January":"一月","February":"二月","March":"三月","April":"四月","May":"五月","June":"六月","July":"七月",
        "August":"八月","September":"九月","October":"十月","November":"十一月","December":"十二月"},
    "week":{"Sun":"日","Mon":"一","Tue":"二","Wed":"三","Thu":"四","Fri":"五","Sat":"六"
 }};
 this.SetSelTypes();
    }
    $onInit(){
        let self=this;
        this.scope.$watch('SearchPancelCtrl.selstartdate', function (value) {
            var  liveDate=null;
            try {
             liveDate = new Date(value);
            } catch(e) {}
            if (!self.isValidDate(liveDate)) {
                self.selstartdate=undefined;
              self.scope.error = "This is not a valid date";
            } else {
              self.scope.error = "";
            }
          });
          this.scope.$watch('SearchPancelCtrl.selenddate', function (value) {
            var  liveDate=null;
            try {
             liveDate = new Date(value);
            } catch(e) {}
            if (!self.isValidDate(liveDate)) {    
                self.selenddate=undefined;
              self.scope.error = "This is not a valid date";
            } else {
              self.scope.error = "";
            }
          });
    }
    isValidDate(date) {
        return date instanceof Date && !isNaN(date.getTime())
      }
    SetSelTypes(){
       let td:Date =new Date();
      // console.log(this.selTypes);
switch(this.selTypes+""){
    case "1":
           this.startDates=[];this.endDates=[];
        for(let x:number=td.getFullYear();x>=2015; x--){
            let item1:SelectItemModel=new SelectItemModel(x.toString(),x.toString()+'-1-1');
            let item2:SelectItemModel=new SelectItemModel(x.toString(),x.toString()+'-12-31');
         this.startDates.push(item1);
         this.endDates.push(item2);
        }
        this.SelstartDate=this.startDates[0];
        this.SelendDate=this.endDates[0];
        console.log(this.SelstartDate);
        console.log(this.SelendDate);
        break;
        case "2":
            td.setMonth(td.getMonth()-12);
    // console.log(minDate);
     this.startDates=[];this.endDates=[];
     for(let x:Date=new Date();x>=td;x.setMonth(x.getMonth()-1)){
        let dtstr:string=x.getFullYear().toString()+'-'+(x.getMonth()+1).toString()+'-1';
        let ct:Date=new Date(dtstr);
        ct.setMonth(ct.getMonth()+1);
        ct.setDate(ct.getDate()-1);
         let name:string=x.getFullYear().toString()+(x.getMonth()>8?(x.getMonth()+1).toString():'0'+(x.getMonth()+1).toString());
         let value1:string=x.getFullYear().toString()+'-'+(x.getMonth()+1).toString()+'-1';
         let value2:string=x.getFullYear().toString()+'-'+(x.getMonth()+1).toString()+'-'+ct.getDate().toString();
         let item1:SelectItemModel=new SelectItemModel(name,value1);
         let item2:SelectItemModel=new SelectItemModel(name,value2);
         this.startDates.push(item1);
         this.endDates.push(item2);
     }
this.SelstartDate=this.startDates[0];
this.SelendDate=this.endDates[0];
            break;
            case "3":

                break;
                default:
                    return;
}
console.log(this.startDates);
    }
    startDateChanged(){
        console.log(this.SelstartDate);
        let td:Date =new Date();
        switch(this.selTypes+""){
            case "1":
                    this.endDates=[];
                    for(let x:number=td.getFullYear();x>=parseInt(this.SelstartDate.value); x--){
                        let item2:SelectItemModel=new SelectItemModel(x.toString(),x.toString()+'-12-31');
                     this.endDates.push(item2);
                    }
                    if(this.endDates.length>0){
                    this.SelendDate=this.endDates[this.endDates.length-1];
                    }
                    
            break;
case "2":
        this.endDates=[];
        let minDate:Date=new Date(this.SelstartDate.value);
        for(let x:Date=new Date();x>=minDate;x.setMonth(x.getMonth()-1)){
            let dtstr:string=x.getFullYear().toString()+'-'+(x.getMonth()+1).toString()+'-1';
            let ct:Date=new Date(dtstr);
            ct.setMonth(ct.getMonth()+1);
            ct.setDate(ct.getDate()-1);
            let name:string=x.getFullYear().toString()+(x.getMonth()>8?(x.getMonth()+1).toString():'0'+(x.getMonth()+1).toString());
            let value:string=ct.getFullYear().toString()+'-'+(ct.getMonth()+1).toString()+'-'+ct.getDate().toString();
            let item:SelectItemModel=new SelectItemModel(name,value);
            this.endDates.push(item);
        }
        this.SelendDate=this.SelstartDate;
    break;
case "3":
    break;
        }
    }
    endDateChanged(){
        console.log(this.SelendDate);
    }
    Statistics(){
        console.log(this.selTypes,this.SelstartDate,this.SelendDate,this.selstartdate,this.selenddate);
        if(this.scope.$parent && this.scope.$parent.Statistics)
        switch(this.selTypes+"")
        {
            case "1":
            case "2":
                    this.scope.$parent.Statistics(this.SelstartDate,this.SelendDate);
                break;
                case "3":
                        this.scope.$parent.Statistics(this.selstartdate,this.selenddate);
                  break;  
        }
    }
    static Link(scope, element, attrs){
        element.css({color:'red'});
    }
    static Factory(){
        return {
            scope: {
                name: '=',
            },
            link: SearchPanel.Link,
            controller: SearchPanel,
            controllerAs: 'SearchPancelCtrl',
            templateUrl: `views/directives/searchpanel.html`
        }
    }
}

SearchPanel.$inject = ['$scope'];