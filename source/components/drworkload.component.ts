import ApiService from './../services/api.service';
import * as XLSX from "xlsx";
import ApiConfig from '../router/apiconfig';
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
    constructor(private api: ApiService,private $scope:any) {
this.cacheDic={};
    }

    $onInit() {

    }
    ExportExcel:Function=function (startDate:string,endDate:string):void{
        let self = this;
        self.startDate=startDate;
        self.endDate=endDate;
        this.api.exec(ApiConfig.StatisticsDrworkload, {startDate:startDate, endDate:endDate}).then(function (result: any) {
            // console.log(result,self.$scope);
            self.cacheDic={};
             self.items=result as any[];
             var hotnames=[];
             var itemValues=[];
             var copyItems=[];
             for(var i=0;i<self.items.length;i++){
                 hotnames.push(self.items[i].DepartName);
                 itemValues.push(self.items[i].totaldiagnos);
                 copyItems.push({"医院":self.items[i].DepartName,"医生数":self.items[i].totaldoctors,"诊断数":self.items[i].totaldiagnos});
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
             self.items=result as any[];
             var hotnames=[];
             var itemValues=[];
             for(var i=0;i<self.items.length;i++){
                 hotnames.push(self.items[i].DepartName);
                 itemValues.push(self.items[i].totaldiagnos);
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
            templateUrl: 'views/components/drworkload.html'
        };
    }
}
DrWorkloadComponent.$inject = ['apiService', '$scope'];