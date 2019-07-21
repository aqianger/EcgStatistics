export  class RequestModel{
    public url:string;
    public method?:string;
}
export class ApiFuncs{
  public  Login:RequestModel={
        url:"test",
        method:"post"
    };
}