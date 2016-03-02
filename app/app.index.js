System.register(['angular2/core', "angular2/router", './store/product.list', './store/category.list'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, product_list_1, category_list_1;
    var Store;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (product_list_1_1) {
                product_list_1 = product_list_1_1;
            },
            function (category_list_1_1) {
                category_list_1 = category_list_1_1;
            }],
        execute: function() {
            Store = (function () {
                function Store() {
                }
                Store = __decorate([
                    core_1.Component({
                        selector: 'store-app'
                    }),
                    core_1.View({
                        templateUrl: '/app/views/navigation.view.html',
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }),
                    router_1.RouteConfig([
                        {
                            path: '/store',
                            name: 'Products',
                            component: product_list_1.ProductList,
                            useAsDefault: true
                        },
                        {
                            path: '/categories',
                            name: 'Categories',
                            component: category_list_1.CategoryList
                        }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], Store);
                return Store;
            })();
            exports_1("Store", Store);
        }
    }
});
//# sourceMappingURL=app.index.js.map