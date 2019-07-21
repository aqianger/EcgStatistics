export default class LoginComponent {
    message: string;
    constructor() {
        this.message = 'Welcome';
    }

    $onInit(){}

    static Factory() {
        return {
            controller: LoginComponent,
            templateUrl: 'views/login/login.html'
        };
    }
}