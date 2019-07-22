import ApiService from './services/api.service';
import MyService from './services/my.service';

let mod = angular.module('services', []);
mod.service('myService', MyService);
mod.service('apiService', ApiService);

export default mod;

