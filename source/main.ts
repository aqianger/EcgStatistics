import components from './components';
import directives from './directives';
import services from './services';
import config from './config';

let app = services;

app.config(config);

angular.bootstrap(document.body, [app.name, components.name, directives.name, services.name,'720kb.datepicker',"ngTable"], {
    strictDi: true
});