import ApiService from './../services/api.service';
import ApiConfig from '../router/apiconfig';
export default class DrWorkloadComponent {
    readonly seriesTitle:string="医生工作量统计";
    items:any[]=[];

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

    }

    $onInit() {

    }
    Statistics:Function=function (startDate:string,endDate:string):void{
        let self = this;
        this.api.exec(ApiConfig.StatisticsDrworkload, {startDate:startDate, endDate:endDate}).then(function (result: any) {
            // console.log(result,self.$scope);
 
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
                 text: self.seriesTitle+ '图'
             },
             tooltip: {},
             legend: {
                 data:['诊断数量']
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