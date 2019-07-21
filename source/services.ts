import MyService from './services/api.service';

let mod = angular.module('services', []);

mod.service('myService', MyService);

export default mod;