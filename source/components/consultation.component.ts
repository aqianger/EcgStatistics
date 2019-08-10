import ApiService from './../services/api.service';
import ApiConfig from '../router/apiconfig';
import {baseUrl} from '../config';
//import {NgTableParams,NgTableEventsChannel,IPageButton} from 'ng-table';
import {NgTableParams,NgTableEventsChannel,IPageButton} from "../../dist/js/ngtable/ng-table";
export default class ConsultationComponent {
    readonly seriesTitle:string="区域检查申请统计";
  /**
   * 
  {"DepartName":"区迎龙镇卫生院","totalConsult":6},
   */
  /**
   * 
   * @param api 
   * @param $scope 
   */
    constructor(private api: ApiService,private $scope:any,private ngtableEventsChannel:NgTableEventsChannel) {

    }

    $onInit() {
        this.$scope.$watch("$ctrl.tableParams", this.subscribeToTable.bind(this)); 
    }
    subscribeToTable(param:any){
        if (!param) return;
        let self=this;
        let  PageChanded=function(publisher: NgTableParams<any>, newPages: IPageButton[], oldPages: IPageButton[]){
            var hotnames=[];
            var itemValues=[];
            let items:any[]=publisher.data;
            for(var i=0;i<items.length;i++){
                hotnames.push(items[i].DepartName);
                itemValues.push(items[i].totalConsult);
            }
              // 指定图表的配置项和数据
        self.$scope.options = {
            title: {
                text: '远程诊断统计图',
                x:'center',
                y:'top',
                textAlign:'center'
            },
            tooltip: {},
            legend: {
                data:['请求会诊数量'],
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
            },
            series: [{
                name: '请求会诊数量',
                type: 'bar',
                data: itemValues
            }]
        };
    }
    this.ngtableEventsChannel.onPagesChanged( PageChanded, this.$scope, param);
    }
    Statistics:Function=function (startDate:string,endDate:string):void{
        let self = this;
        this.api.exec(ApiConfig.StatisticsConsultation, {startDate:startDate, endDate:endDate}).then(function (result: any) {
            // console.log(result,self.$scope);
            self.tableParams=new NgTableParams({count: 15},{counts: [10, 15, 30,40],dataset:result});
        });
            
    }
    static Factory() {
        return {
            controller: ConsultationComponent,
            templateUrl:baseUrl+ 'views/components/consultation.html'
        };
    }
}
ConsultationComponent.$inject = ['apiService', '$scope',"ngTableEventsChannel"];