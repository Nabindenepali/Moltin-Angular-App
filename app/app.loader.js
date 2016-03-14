System.register(['angular2/platform/browser', "angular2/router", 'angular2/http', './app.index', './dataService/service.details', './dataService/data.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, router_1, http_1, app_index_1, service_details_1, data_service_1;
    var currentDate;
    //GET ACCESS TOKEN
    function getAccessToken() {
        var creds = "client_id=" + service_details_1.Statics.PUBLIC_ID + "&grant_type=implicit";
        var promise = new Promise(function (resolve, reject) {
            var request = new XMLHttpRequest();
            request.open('POST', 'https://api.molt.in/oauth/access_token?');
            request.onload = function () {
                if (request.status == 200) {
                    resolve(request.response);
                }
                else {
                    reject(Error(request.statusText));
                }
            };
            request.onerror = function () {
                reject(Error('Error fetching data.'));
            };
            request.send(creds); //send the request
        });
        promise.then(function (data) {
            sessionStorage.setItem('access-token', JSON.parse(data).access_token);
            sessionStorage.setItem('expires', JSON.parse(data).expires);
            console.log(sessionStorage);
            browser_1.bootstrap(app_index_1.Store, [router_1.ROUTER_PROVIDERS, data_service_1.DataService, http_1.HTTP_PROVIDERS, http_1.JSONP_PROVIDERS]);
        }, function (error) {
            console.log(error.message);
        });
    }
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (app_index_1_1) {
                app_index_1 = app_index_1_1;
            },
            function (service_details_1_1) {
                service_details_1 = service_details_1_1;
            },
            function (data_service_1_1) {
                data_service_1 = data_service_1_1;
            }],
        execute: function() {
            currentDate = Math.floor(Date.now() / 1000);
            //var currentDate = 1457585941;
            console.log(currentDate);
            if (sessionStorage.length == 0 || sessionStorage.expires <= currentDate) {
                console.log('Fetching Access Token');
                getAccessToken();
            }
            else {
                console.log('Using Available Access Token');
                //console.log(sessionStorage);
                browser_1.bootstrap(app_index_1.Store, [router_1.ROUTER_PROVIDERS, data_service_1.DataService, http_1.HTTP_PROVIDERS, http_1.JSONP_PROVIDERS]);
            }
        }
    }
});
//# sourceMappingURL=app.loader.js.map