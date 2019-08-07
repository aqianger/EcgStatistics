//import ApiService from '../services/api.service';
/**
 * 本来用来封装datatable组件，后面决定使用ngTable,这里就不用了
 */
export default class DtTable {
    
    constructor(private scope:any){
        
    }

    static Link(scope, element, attrs,controller){
        var dataTable=element.dataTable(scope.options);
        scope.$watch('tboptions.tbData',handleModelUpdates,true);
        function handleModelUpdates(newData){
            var data=newData||null;
            if(data){
                dataTable.fnClearTable();
                dataTable.fnAddData(data);
            }
        }
    }
    static Factory(){
        return {
            scope: {
                tboptions: '='
            },
            link: DtTable.Link,
            controller: DtTable,
            controllerAs: 'myTable',
            restrict:'E,A,C'
        }
    }
}

DtTable.$inject = ['$scope'];