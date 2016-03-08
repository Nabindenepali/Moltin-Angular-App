System.register(['angular2/platform/browser', "angular2/router", 'angular2/http', './app.index', './dataService/service.details', './dataService/data.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, router_1, http_1, app_index_1, service_details_1, data_service_1;
    var moltin;
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
            //Gets Access Token First
            if (sessionStorage.length == 0) {
                //Gets a new access token of there is nothing in sessionStorage
                moltin = new Moltin({ publicId: service_details_1.Statics.PUBLIC_ID });
                moltin.Authenticate(function (response) {
                    sessionStorage.setItem('access-token', JSON.stringify(response));
                    browser_1.bootstrap(app_index_1.Store, [router_1.ROUTER_PROVIDERS, data_service_1.DataService, http_1.HTTP_PROVIDERS]);
                });
            }
            else {
                //loads the app if there is data in sessionStorage this needs a bit of tweak
                browser_1.bootstrap(app_index_1.Store, [router_1.ROUTER_PROVIDERS, data_service_1.DataService, http_1.HTTP_PROVIDERS]);
            }
        }
    }
});
//# sourceMappingURL=app.loader.js.map