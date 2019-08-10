import ApiService from './../services/api.service';
import * as XLSX from "xlsx";
import ApiConfig from '../router/apiconfig';
import {NgTableParams,NgTableEventsChannel,IPageButton} from "../../dist/js/ngtable/ng-table";
import {baseUrl} from '../config';
export default class DrWorkloadComponent {
    readonly seriesTitle:string="医生工作量统计";
    items:any[]=[];
    clditems:any[];
    selHospital:string;
    cacheDic:any;
    startDate:string;
    endDate:string;
  /**
   * 
{\"DepartId\":\"e7973855-9916-4891-a3fc-ea28d9ae4441\",\"DepartName\":\"区长生桥镇卫生院\",\"totaldoctors\":1,\"totaldiagnos\":11554}
   */
  /**
   * 
   * @param api 
   * @param $scope 
   */
    constructor(private api: ApiService,private $scope:any,private ngtableEventsChannel:NgTableEventsChannel) {
this.cacheDic={};
    }

    $onInit() {
        this.$scope.$watch("$ctrl.tableParams", this.subscribeToTable.bind(this));
    }
  
    subscribeToTable(param:any){
        if (!param) return;
        let self=this;
      let  PageChanded=function(publisher: NgTableParams<any>, newPages: IPageButton[], oldPages: IPageButton[]){
            let items:any[]=publisher.data;
            var hotnames=[];
             var itemValues=[];
             for(var i=0;i<items.length;i++){
                 hotnames.push(items[i].DepartName);
                 itemValues.push(items[i].totaldiagnos);
             }
             
               // 指定图表的配置项和数据
         self.$scope.options = {
             title: {
                 text: self.seriesTitle+ '图',
                 x:'center',
                 y:'top',
                 textAlign:'center'
             },
             tooltip: {},
             legend: {
                 data:['诊断数量'],
                 x: 'right',
             },
             grid: {
                              x: 250,
                             x2: 50,
                              y2: 50
                     },
             xAxis: {
       
             },
             yAxis: {
                 data: hotnames,
                 offset:0,
                 nameLocation:"middle"
             },
             series: [{
                 name: '诊断数量',
                 type: 'bar',
                 data: itemValues
             }]
         };
      }
      this.ngtableEventsChannel.onPagesChanged( PageChanded, this.$scope, param);
    }
exportDocInfos(){
    let td:Date=new Date();
    var copyItems=[];
    for(var i=0;i<this.clditems.length;i++){
        copyItems.push({"医生名称":this.clditems[i].UserName,"诊断数量":this.clditems[i].totaldiagnos});
    }
if(copyItems.length==0){
    return;
}
    var ws =XLSX.utils.json_to_sheet(copyItems);
/* add to workbook */
var wb = XLSX.utils.book_new();
XLSX.utils.book_append_sheet(wb, ws, this.selHospital+"医生工作量");
/* write workbook and force a download */
XLSX.writeFile(wb, this.selHospital+"医生工作量"+td.getFullYear()+(td.getMonth()+1).toString()+td.getDate()+  ".xlsx");
}

    ExportExcel:Function=function (startDate:string,endDate:string):void{
        let self = this;
        self.startDate=startDate;
        self.endDate=endDate;
        this.api.exec(ApiConfig.StatisticsDrworkload, {startDate:startDate, endDate:endDate}).then(function (result: any) {
            // console.log(result,self.$scope);
            self.cacheDic={};
             
             var hotnames=[];
             var itemValues=[];
             var copyItems=[];
             for(var i=0;i<result.length;i++){
                 hotnames.push(result [i].DepartName);
                 itemValues.push(result [i].totaldiagnos);
                 copyItems.push({"医院":result[i].DepartName,"医生数":result[i].totaldoctors,"诊断数":result[i].totaldiagnos});
             }
             let td:Date=new Date();
             /* generate a worksheet */
var ws =XLSX.utils.json_to_sheet(copyItems);
/* add to workbook */
var wb = XLSX.utils.book_new();
XLSX.utils.book_append_sheet(wb, ws, self.seriesTitle+"("+startDate+"~"+endDate +")");
/* write workbook and force a download */
XLSX.writeFile(wb, self.seriesTitle+td.getFullYear()+(td.getMonth()+1).toString()+td.getDate()+td.getHours()+td.getMinutes()+td.getSeconds()+  ".xlsx");
               // 指定图表的配置项和数据
         self.$scope.options = {
             title: {
                 text: self.seriesTitle+ '图',
                 x:'center',
                 y:'top',
                 textAlign:'center'
             },
             tooltip: {},
             legend: {
                 data:['诊断数量'],
                 x: 'right',
             },
             grid: {
                              x: 250,
                             x2: 50,
                              y2: 50
                     },
             xAxis: {
       
             },
             yAxis: {
                 data: hotnames,
                 offset:0,
                 nameLocation:"middle"
             },
             series: [{
                 name: '诊断数量',
                 type: 'bar',
                 data: itemValues
             }]
         };
         });
    };
    Statistics:Function=function (startDate:string,endDate:string):void{
        let self = this;
        self.startDate=startDate;
        self.endDate=endDate;
        this.api.exec(ApiConfig.StatisticsDrworkload, {startDate:startDate, endDate:endDate}).then(function (result: any) {
            // console.log(result,self.$scope);
            self.cacheDic={};
            self.tableParams=new NgTableParams({count: 15},{counts: [10, 15, 30,40],dataset:result});
             
         });
    };
    ShowDepartInfo(departId:string,hospital:string){
        let self = this;
        self.selHospital=hospital;
        self.clditems=[];
        if(self.cacheDic[departId]){
            self.clditems=self.cacheDic[departId];
            $('#myModal').modal('show');
        }
        else{
    this.api.exec(ApiConfig.StatisticsDrworkbydep,{DepartId:departId,startDate:self.startDate,endDate:self.endDate}).then(function (result: any) {
         self.clditems=result as any[];
         self.cacheDic.departId=result;
         $('#myModal').modal('show');
    });
}
    }
/*         
                axisLabel:{
                    interval:0,
                    rotate:40
                }*/
    static Factory() {
        return {
            controller: DrWorkloadComponent,
            templateUrl: baseUrl+'views/components/drworkload.html'
        };
    }
}
DrWorkloadComponent.$inject = ['apiService', '$scope',"ngTableEventsChannel"];