import ApiService from './../services/api.service';
import ApiConfig from '../router/apiconfig';
export default class ConsultationComponent {
    readonly seriesTitle:string="区域检查申请统计";
    items:any[]=[];
  /**
   * 
  {"DepartName":"区迎龙镇卫生院","totalConsult":6},
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
        this.api.exec(ApiConfig.StatisticsConsultation, {startDate:startDate, endDate:endDate}).then(function (result: any) {
            // console.log(result,self.$scope);
 
             self.items=result as any[];
             var hotnames=[];
             var itemValues=[];
             for(var i=0;i<self.items.length;i++){
                 hotnames.push(self.items[i].DepartName);
                 itemValues.push(self.items[i].totalConsult);
             }
             
               // 指定图表的配置项和数据
         self.$scope.options = {
             title: {
                 text: '远程诊断统计图'
             },
             tooltip: {},
             legend: {
                 data:['请求会诊数量']
             },
             
             xAxis: {
       
             },
             yAxis: {
                 data: hotnames,
             },
             series: [{
                 name: '请求会诊数量',
                 type: 'bar',
                 data: itemValues
             }]
         };
         });
    }
    static Factory() {
        return {
            controller: ConsultationComponent,
            templateUrl: 'views/components/consultation.html'
        };
    }
}
ConsultationComponent.$inject = ['apiService', '$scope'];