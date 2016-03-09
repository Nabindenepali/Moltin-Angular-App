System.register(['angular2/platform/browser', "angular2/router", 'angular2/http', './app.index', './dataService/data.service'], function(exports_1) {
    var browser_1, router_1, http_1, app_index_1, data_service_1;
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
            function (data_service_1_1) {
                data_service_1 = data_service_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_index_1.Store, [router_1.ROUTER_PROVIDERS, data_service_1.DataService, http_1.HTTP_PROVIDERS]);
        }
    }
});
//# sourceMappingURL=app.loader.js.map