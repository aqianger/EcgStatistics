import * as echarts from "echarts";
export default class echartsDirective {
    
    constructor(private scope:any){
        
    }
 
    static Link(scope, element, attrs, ctrl){
        var wrap = $('<div></div>').css({
            width: scope.width||'100%',
            height: scope.height||'210'
        });
        $(element).css({
            display:'block',
            width: scope.width||'100%',
            height: scope.height||'210'
        });
        var myChart = echarts.init(element[0]);
        window.addEventListener('resize',function(){
                myChart.resize();//监测图表自适应
            });
        scope.$parent.$watch('options', function(n, o){
            if (typeof(n)=='object') {
                myChart.setOption(scope.$parent.options); 
            }else{
                /*
                 var options = {
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

                myChart.setOption(options);*/
            }
        });
    }
    static Factory(){
        return {
            restrict: 'AE',
		 replace: true,
            scope: {
                name: '=',
                height: '@',
			width: '@'
            },
            link: echartsDirective.Link,
            controller: echartsDirective,
            controllerAs: 'myEchart'
        }
    }
}

echartsDirective.$inject = ['$scope'];
