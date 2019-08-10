import ApiService from './../services/api.service';
import ApiConfig from '../router/apiconfig';
import {baseUrl} from '../config';
export default class OverallComponent {
    /**
     * "{\"total_hospital\":12,\"total_diagnosis\":115892,\"total_consultations\":145,\"ratio_positive\":0.58,\"total_devices\":89}"
     */
    total_hospital: Number;
    total_diagnosis: Number;
    total_consultations: Number;
    ratio_positive: Number;
    total_devices: Number;
    Listitems:string[]=["医院数量：","检查总量：","请求远程诊断总量：","阳性率：","设备总量："];
    constructor(private api: ApiService,private $scope:any) {

    }

    $onInit() {
        let self = this;
        this.api.exec(ApiConfig.StatisticsOverall, {}).then(function (result: any) {
           // console.log(result);
            if (result) {
                self.total_hospital = result.total_hospital;
                self.ratio_positive = result.ratio_positive*100;
                self.total_consultations = result.total_consultations;
                self.total_devices = result.total_devices;
                self.total_diagnosis = result.total_diagnosis;

            }
        });
        this.api.exec(ApiConfig.StatisticsRegional,{}).then(function(result:any){
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
    static Factory() {
        return {
            controller: OverallComponent,
            templateUrl: baseUrl+'views/components/Overall.html'
        };
    }
}
OverallComponent.$inject = ['apiService', '$scope'];