import {RequestModel,ApiFuncs} from '../model/requestmodel';
import errortoast from '../errortoast';
export default class ApiService {
    server_url="http://localhost:4000";

    constructor(private http,private $q:ng.IQService,private $rootScope:any){

    }
    do(){
        console.log(this.http);
        console.log('my service do() called');
    }

    exec(reqitem:RequestModel, param:any){
        let delay = this.$q.defer();

        let ToUrl =reqitem.url;
        let CData = null;
       let CType;

        let method = "post";
        if (reqitem.method) {
            method = reqitem.method;
        }
        if (method == "get") {
            if (param) {
                CData = $.param(param);
                if (ToUrl.indexOf("?") < 0)
                    ToUrl = ToUrl + "?" + CData;
                else
                    ToUrl = ToUrl + "&" + CData;
                CData = {};
            } else {
                console.log("param=null");
            }
        } else {
            method = "post";
            if (ToUrl.indexOf(".ashx") > 0) {
                CData = $.param(param);
                CType = "application/x-www-form-urlencoded"; //"multipart/form-data";
            } else {
                CType = 'application/json';
                if (param != null)
                    CData = JSON.stringify(param);
            }
        }
        console.log("call api :" + ToUrl+":"+JSON.stringify(CData));

      this.$rootScope.loading = true;
        var promise = this.http({
                url: this.server_url + ToUrl,
                method: method,
                data: CData,
                //timeout: 10000,
                withCredentials: true,
                headers: {
                    'Content-Type': CType,
                    //"cache-control": "no-cache"
                }
            })
            .then(function(response) {
                console.log("response:" + JSON.stringify(response));
                delay.resolve(response.data);
                this.$rootScope.loading = false;
            }, function(err) {
                //console.log(error.statusText + error.status);
                if (err.status == 401) {
                    console.log("401 error,go autologin");
                  
                                   this.http({
                                            url: this.server_url + ToUrl,
                                            method: method,
                                            data: CData,
                                            timeout: 10000,
                                            headers: {
                                                'Content-Type': CType,
                                                /*"cache-control": "no-cache"*/
                                            }
                                        })
                                        .then(function(response) {
                                            console.log("response:" + JSON.stringify(response));
                                            delay.resolve(response.data);
                                            this.$rootScope.loading = false;
                                        }, function(err) {
                                            delay.reject(err.statusText);
                                            this.$rootScope.loading = false;
                                        });                       
                } else {
                    this.$rootScope.loading = false;
                    delay.reject(err.statusText);
                    //alert(error.statusText + ":" + error.data.ExceptionMessage);
                    if (err.status != 0) {

                        errortoast("请求服务器错误:status=" + err.status + "," + err.statusText);
                    } else {
                        errortoast("无法连接服务器,请检查网络设置");
                    }
                }
            });


        //return promise;
        return delay.promise;
    }
    bar(){
        console.log('my service bar() called');
    }
}

ApiService.$inject = ['$http','$rootScope', '$q', 'Functions', '$state'];