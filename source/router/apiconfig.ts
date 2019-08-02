 import RequestModel from './../model/requestmodel'
 export class ApiConfig{
     /**
      * http://192.168.25.170:22534/Statistic/GetStatisticsRegional
http://192.168.25.170:22534/Statistic/GetStatisticsOverall
http://192.168.25.170:22534/Statistic/GetStatisticsDrworkload
http://192.168.25.170:22534/Statistic/GetStatisticsDevices
http://192.168.25.170:22534/Statistic/GetStatisticsConsultation
http://192.168.25.170:22534/Statistic/GetStatisticsPositiveRate
http://192.168.25.170:22534/Statistic/GetStatisticsDrworkbydep?DepartId=6b3c7d57-dc87-406b-a612-2f4f825f76c5
      */
     public Login:RequestModel;
public StatisticsRegional:RequestModel;
public StatisticsOverall:RequestModel;
public StatisticsDrworkload:RequestModel;
public StatisticsDevices:RequestModel;
public StatisticsConsultation:RequestModel;
public StatisticsPositiveRate:RequestModel;
public StatisticsDrworkbydep:RequestModel;
    constructor(){
        this.Login=new RequestModel();
this.Login.url="values";
this.Login.method="post";
this.StatisticsRegional=new RequestModel();
this.StatisticsRegional.method="get";
this.StatisticsRegional.url="GetStatisticsRegional";
this.StatisticsOverall=new RequestModel();
this.StatisticsOverall.url="GetStatisticsOverall";
this.StatisticsDrworkload=new RequestModel();
this.StatisticsDrworkload.url="GetStatisticsDrworkload";
this.StatisticsDevices=new RequestModel();
this.StatisticsDevices.url="GetStatisticsDevices";
this.StatisticsConsultation=new RequestModel();
this.StatisticsConsultation.url="GetStatisticsConsultation";
this.StatisticsPositiveRate=new RequestModel();
this.StatisticsPositiveRate.url="GetStatisticsPositiveRate";
this.StatisticsDrworkbydep=new RequestModel();
this.StatisticsDrworkbydep.url="GetStatisticsDrworkbydep";

    }
 }

export default new ApiConfig();