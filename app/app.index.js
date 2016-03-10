System.register(['angular2/core', "angular2/router", './dataService/data.service', './store/product.list', './store/productDetail.component', './store/search.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, data_service_1, product_list_1, productDetail_component_1, search_component_1;
    var Store;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (data_service_1_1) {
                data_service_1 = data_service_1_1;
            },
            function (product_list_1_1) {
                product_list_1 = product_list_1_1;
            },
            function (productDetail_component_1_1) {
                productDetail_component_1 = productDetail_component_1_1;
            },
            function (search_component_1_1) {
                search_component_1 = search_component_1_1;
            }],
        execute: function() {
            Store = (function () {
                function Store(_dataService) {
                    this._dataService = _dataService;
                    this.getCategories();
                }
                Store.prototype.getCategories = function () {
                    var _this = this;
                    this._dataService.getCategories().subscribe(function (categories) { return _this.categories = categories; });
                };
                Store.prototype.showNav = function () {
                    this.toggleClass();
                };
                Store.prototype.toggleClass = function () {
                    this.addClass = !this.addClass;
                };
                Store = __decorate([
                    core_1.Component({
                        selector: 'store-app'
                    }),
                    core_1.View({
                        templateUrl: '/app/views/navigation.view.html',
                        directives: [router_1.ROUTER_DIRECTIVES, search_component_1.Search]
                    }),
                    router_1.RouteConfig([
                        {
                            path: '/store',
                            name: 'Products',
                            component: product_list_1.ProductList
                        },
                        {
                            path: '/store/:productslug',
                            name: 'ProductsDetail',
                            component: productDetail_component_1.ProductDetail
                        }
                    ]), 
                    __metadata('design:paramtypes', [data_service_1.DataService])
                ], Store);
                return Store;
            }());
            exports_1("Store", Store);
        }
    }
});
//# sourceMappingURL=app.index.js.map