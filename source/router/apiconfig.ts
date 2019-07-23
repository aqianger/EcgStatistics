 import RequestModel from './../model/requestmodel'
 export class ApiConfig{
     public Login:RequestModel;
    constructor(){
        this.Login=new RequestModel();
this.Login.url="values";
this.Login.method="get";
    }
 }

export default new ApiConfig();