import ApiService from './../services/api.service';
import ApiConfig from '../router/apiconfig';
import {NgTableParams,NgTableEventsChannel,IPageButton} from "../../dist/js/ngtable/ng-table";
import {baseUrl} from '../config';
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
    constructor(private api: ApiService,private $scope:any,private ngtableEventsChannel:NgTableEventsChannel,private ngTableParams:NgTableParams) {
    }

    $onInit() {
        this.$scope.$watch("$ctrl.tableParams", this.subscribeToTable.bind(this));
    }
  
    subscribeToTable(param:any){
        if (!param) return;
        let self=this;
      let  PageChanded=function(publisher: NgTableParams, newPages: IPageButton[], oldPages: IPageButton[]){
            var hotnames=[];
            var itemValues=[];
            let items:any[]=publisher.data;
            for(var i=0;i<items.length;i++){
                hotnames.push(items[i].DepartName+":"+items[i].DeviceId);
                itemValues.push(items[i].totalexam);
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
              y:50,
               y2: 50
      },
            xAxis: {
      
            },
            yAxis: {
                data: hotnames,
                axisLabel:{interval:0}
            },
            series: [{
                name: '检查数量',
                type: 'bar',
                data: itemValues
            }]
        };
                }
        this.ngtableEventsChannel.onPagesChanged( PageChanded, this.$scope, param);
    }
   
    Statistics:Function=function (startDate:string,endDate:string):void{
        let self = this;
        this.api.exec(ApiConfig.StatisticsDevices, {startDate:startDate, endDate:endDate}).then(function (result: any) {

           self.tableParams=self.ngTableParams({count: 15},{counts: [10, 15, 30,40],dataset:result});
    
            
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
            templateUrl: baseUrl+'views/components/devices.html'
        };
    }
}
DevicesComponent.$inject = ['apiService', '$scope',"ngTableEventsChannel","NgTableParams"];