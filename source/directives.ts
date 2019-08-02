import MyDirective from './directives/my.directive';
import navItem from './directives/navitem';
import navItemInner from "./directives/navitem.inner";
import navItemInnerRich from "./directives/navitem.inner.rich";
import echartsDirective from './directives/echart.directive';
import SearchPanel from './directives/searchpanel';
import mod from './services';
//let mod = angular.module('Statistics', []);

mod.directive('myDrc', MyDirective.Factory);
mod.directive('navItem', navItem.Factory);
mod.directive('navItemInner', navItemInner.Factory);
mod.directive('navItemInnerRich', navItemInnerRich.Factory);
mod.directive('echarts',echartsDirective.Factory);
mod.directive('searchpanel',SearchPanel.Factory);
export default mod;