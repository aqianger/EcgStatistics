import ApiService from './../services/api.service';
import ApiConfig from '../router/apiconfig';
export default class LoginComponent {
    message: string;
    constructor(private api:ApiService) {
        this.message = 'Welcome';
    }

    $onInit(){
        this.api.exec(ApiConfig.login,{id:1}).then(function(result){
console.log(result);
        })
    }

    static Factory() {
        return {
            controller: LoginComponent,
            templateUrl: 'views/login/login.html'
        };
    }
}
LoginComponent.$inject = ['apiService', '$scope'];