import {bootstrap} from 'angular2/platform/browser';
import {ROUTER_PROVIDERS} from "angular2/router";
import {HTTP_PROVIDERS,JSONP_PROVIDERS}    from 'angular2/http';
import {Store} from './app.index';
import {Statics} from './dataService/service.details';
import {DataService} from './dataService/data.service';
import {init} from "typings/dist/init";

var currentDate = Math.floor(Date.now()/1000);
//var currentDate = 1457585941;
console.log(currentDate);



if(sessionStorage.length == 0 || sessionStorage.expires <= currentDate){
    console.log('Fetching Access Token');
    getAccessToken();
} else {
    console.log('Using Available Access Token');
    //console.log(sessionStorage);
    bootstrap(Store,[ROUTER_PROVIDERS,DataService,HTTP_PROVIDERS,JSONP_PROVIDERS])
}

//GET ACCESS TOKEN
function getAccessToken(){
    var creds = "client_id=" + Statics.PUBLIC_ID +  "&grant_type=implicit";
    var promise = new Promise(function(resolve, reject) {
        var request = new XMLHttpRequest();
        request.open('POST', 'https://api.molt.in/oauth/access_token?');
        request.onload = function() {
            if (request.status == 200) {
                resolve(request.response);
            } else {
                reject(Error(request.statusText));
            }
        };
        request.onerror = function() {
            reject(Error('Error fetching data.'));
        };
        request.send(creds); //send the request
    });
    promise.then(function(data) {
        sessionStorage.setItem('access-token' , JSON.parse(data).access_token);
        sessionStorage.setItem('expires' , JSON.parse(data).expires);
        console.log(sessionStorage);
        bootstrap(Store,[ROUTER_PROVIDERS,DataService,HTTP_PROVIDERS,JSONP_PROVIDERS])
    }, function(error) {
        console.log(error.message);
    });

}











