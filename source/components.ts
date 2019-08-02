import AppComponent from './components/app.component';
import AppcontainerComponent from './components/appcontainer.component';
import HeaderComponent from './components/header.component';
import MainSidebarComponent from './components/main-sidebar.component';
import ControlSidebarComponent from './components/control-sidebar.component';
// pages
import HomeComponent from './components/home.component';
import CalendarComponent from './components/calendar.component';
import Loginlayer from './components/loginlayer.component';
import Login from './components/login.component';
import Overall from './components/overall.component';
import Regional from './components/regional.component';
import mod from './services';
// module
//let mod = angular.module('xStatistics', []);
mod.component('appcontainer', AppcontainerComponent.Factory());
mod.component('app', AppComponent.Factory());
mod.component('header', HeaderComponent.Factory());
mod.component('mainSidebar', MainSidebarComponent.Factory());
mod.component('controlSidebar', ControlSidebarComponent.Factory());
// pages
mod.component('home', HomeComponent.Factory());
mod.component('calendar', CalendarComponent.Factory());
mod.component('loginlayer',Loginlayer.Factory());
mod.component("login",Login.Factory());
mod.component("overall",Overall.Factory());
mod.component("regional",Regional.Factory());
export default mod;