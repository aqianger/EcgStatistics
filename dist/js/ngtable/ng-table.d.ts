export interface NgTableParams<T>{
data:any;
}
export interface IPageButton{

}
export interface NgTableEventsChannel{
   onPagesChanged(PageChanded:any,  scope:any, param:any):void;
}
export function NgTableParams(options:any,param:any):void;