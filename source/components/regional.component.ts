import ApiService from './../services/api.service';
import ApiConfig from '../router/apiconfig';
import {baseUrl} from '../config';
//import {NgTableParams} from '../../dist/js/ngtable/';
declare var NgTableParams;
export default class RegionalComponent {
    readonly seriesTitle:string="区域检查申请统计";
  /**
   * 
  0: {DepartName: "区长生桥镇卫生院", DiagNum: 11554}
1: {DepartName: "区弹子石社区卫生服务中心", DiagNum: 7}
2: {DepartName: "区妇幼保健计划生育服务中心", DiagNum: 268}
3: {DepartName: "区广阳镇卫生院", DiagNum: 8}
4: {DepartName: "区鸡冠石镇卫生院", DiagNum: 2275}
5: {DepartName: "区人民医院", DiagNum: 2}
6: {DepartName: "区铜元局社区卫生服务中心", DiagNum: 8}
7: {DepartName: "区峡口镇卫生院", DiagNum: 20}
8: {DepartName: "区迎龙镇卫生院", DiagNum: 57}
9: {DepartName: "重庆第五人民医院", DiagNum: 135869}
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
        this.api.exec(ApiConfig.StatisticsRegional, {startDate:startDate, endDate:endDate}).then(function (result: any) {
            // console.log(result,self.$scope);
            self.tableParams=new NgTableParams({count: 15},{counts: [10, 15, 30,40],dataset:result});
            
             var hotnames=[];
             var itemValues=[];
             for(var i=0;i<result.length;i++){
                 hotnames.push(result[i].DepartName);
                 itemValues.push(result[i].DiagNum);
             }
             
               // 指定图表的配置项和数据
         self.$scope.options = {
             title: {
                 text: '区域检查申请统计图',
                 x:'center',
                 y:'top',
                 textAlign:'center'
             },
             tooltip: {},
             legend: {
                 data:['检查数量'],
                 x: 'right',
             },  
             xAxis: {     
             },
             grid: {
                x: 250,
               x2: 50,
               y:50,
                y2: 50
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
            controller: RegionalComponent,
            templateUrl:baseUrl+ 'views/components/regional.html'
        };
    }
}
RegionalComponent.$inject = ['apiService', '$scope','NgTableParams'];