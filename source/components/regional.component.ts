import ApiService from './../services/api.service';
import ApiConfig from '../router/apiconfig';
export default class RegionalComponent {
    /**
     * "{\"total_hospital\":12,\"total_diagnosis\":115892,\"total_consultations\":145,\"ratio_positive\":0.58,\"total_devices\":89}"
     */
  
    constructor(private api: ApiService,private $scope:any) {

    }

    $onInit() {
        let self = this;
        this.api.exec(ApiConfig.StatisticsRegional, {}).then(function (result: any) {
            console.log(result,self.$scope);
              // 指定图表的配置项和数据
        self.$scope.options = {
            title: {
                text: 'ECharts 入门示例'
            },
            tooltip: {},
            legend: {
                data:['销量']
            },
            xAxis: {
                data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        };
        });
    }

    static Factory() {
        return {
            controller: RegionalComponent,
            templateUrl: 'views/components/regional.html'
        };
    }
}
RegionalComponent.$inject = ['apiService', '$scope'];