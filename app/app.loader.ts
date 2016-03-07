import {bootstrap} from 'angular2/platform/browser';
import {ROUTER_PROVIDERS} from "angular2/router";
import {HTTP_PROVIDERS}    from 'angular2/http';
import {Store} from './app.index';
import {DataService} from './dataService/data.service'

bootstrap(Store,[ROUTER_PROVIDERS,DataService,HTTP_PROVIDERS]);


