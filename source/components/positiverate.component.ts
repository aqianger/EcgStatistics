import ApiService from './../services/api.service';
import ApiConfig from '../router/apiconfig';
import {baseUrl} from '../config';
import {NgTableParams,NgTableEventsChannel,IPageButton} from "../../dist/js/ngtable/ng-table";
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
    constructor(private api: ApiService,private $scope:any,private ngtableEventsChannel:NgTableEventsChannel,private ngTableParams:NgTableParams) {

    }

    $onInit() {
        this.$scope.$watch("$ctrl.tableParams", this.subscribeToTable.bind(this));
    }
    subscribeToTable(param:any){
        if (!param) return;
        let self=this;
      let  PageChanded=function(publisher: NgTableParams, newPages: IPageButton[], oldPages: IPageButton[]){
        let items:any[]=publisher.data;
        var hotnames=[];
        var itemValues=[];
        for(var i=0;i<items.length;i++){
            hotnames.push(items[i].DepartName);
            itemValues.push(items[i].positiverate);
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
      }
      this.ngtableEventsChannel.onPagesChanged( PageChanded, this.$scope, param);
    }

    Statistics:Function=function (startDate:string,endDate:string):void{
        let self = this;
        this.api.exec(ApiConfig.StatisticsPositiveRate, {startDate:startDate, endDate:endDate}).then(function (result: any) {
            // console.log(result,self.$scope);
            self.tableParams=new self.ngTableParams({count: 15},{counts: [10, 15, 30,40],dataset:result});
         
            
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
            templateUrl:baseUrl+ 'views/components/positiverate.html'
        };
    }
}
PositiveRateComponent.$inject = ['apiService', '$scope',"ngTableEventsChannel","NgTableParams"];