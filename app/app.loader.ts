import {bootstrap} from 'angular2/platform/browser';
import {ROUTER_PROVIDERS} from "angular2/router";
import {HTTP_PROVIDERS}    from 'angular2/http';
import {Store} from './app.index';
import {Statics} from './dataService/service.details';
import {DataService} from './dataService/data.service';

//Gets Access Token First
if(sessionStorage.length == 0){
   //Gets a new access token of there is nothing in sessionStorage
    var moltin = new Moltin({publicId:Statics.PUBLIC_ID});
    moltin.Authenticate(
        function(response){
            sessionStorage.setItem('access-token' , JSON.stringify(response));
            bootstrap(Store,[ROUTER_PROVIDERS,DataService,HTTP_PROVIDERS])
        }
    )
} else {
    //loads the app if there is data in sessionStorage this needs a bit of tweak
    bootstrap(Store,[ROUTER_PROVIDERS,DataService,HTTP_PROVIDERS])
}





