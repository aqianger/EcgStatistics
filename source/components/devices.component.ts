import ApiService from './../services/api.service';
import ApiConfig from '../router/apiconfig';
import {NgTableParams} from "ng-table";

export default class DevicesComponent {
    readonly seriesTitle:string="设备工作量统计";
   // items:any[]=[];

  /**s
   * 
 ,{\"DepartName\":\"重庆第五人民医院\",\"DeviceId\":\"wyfck\",\"totalexam\":3955}
   */
  /**
   * 
   * @param api 
   * @param $scope 
   */
    constructor(private api: ApiService,private $scope:any) {

    }

    $onInit() {
       
    }
    Statistics:Function=function (startDate:string,endDate:string):void{
        let self = this;
        this.api.exec(ApiConfig.StatisticsDevices, {startDate:startDate, endDate:endDate}).then(function (result: any) {
            // console.log(result,self.$scope);
 
             self.items=result as any[];
           self.tableParams=new NgTableParams({count: 15},{counts: [10, 15, 30,40],dataset:result});
           
             var hotnames=[];
             var itemValues=[];
             for(var i=0;i<self.items.length;i++){
                 hotnames.push(result[i].DepartName+":"+result[i].DeviceId);
                 itemValues.push(result[i].totalexam);
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
                 data:['检查数量'],
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
             },
             series: [{
                 name: '检查数量',
                 type: 'bar',
                 data: itemValues
             }]
         };
         });
    }
/*         
                axisLabel:{
                    interval:0,
                    rotate:40
                }*/
    static Factory() {
        return {
            controller: DevicesComponent,
            templateUrl: 'views/components/devices.html'
        };
    }
}
DevicesComponent.$inject = ['apiService', '$scope'];