import ApiService from './../services/api.service';
import ApiConfig from '../router/apiconfig';
export default class PositiveRateComponent {
    readonly seriesTitle:string="阳性率统计";
    items:any[]=[];

  /**
   * 
 \"DepartName\":\"区广阳镇卫生院\",\"positiverate\":100.00
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
        this.api.exec(ApiConfig.StatisticsPositiveRate, {startDate:startDate, endDate:endDate}).then(function (result: any) {
            // console.log(result,self.$scope);
 
             self.items=result as any[];
             var hotnames=[];
             var itemValues=[];
             for(var i=0;i<self.items.length;i++){
                 hotnames.push(self.items[i].DepartName);
                 itemValues.push(self.items[i].positiverate);
             }
             
               // 指定图表的配置项和数据
         self.$scope.options = {
             title: {
                 text: self.seriesTitle+ '图',
                 x:'center',
             },
             tooltip: {},
             legend: {
                 data:['检查数量'],
                 x:'right',
             },
             grid: {
                x: 200,
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
            controller: PositiveRateComponent,
            templateUrl: 'views/components/positiverate.html'
        };
    }
}
PositiveRateComponent.$inject = ['apiService', '$scope'];