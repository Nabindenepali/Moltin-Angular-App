System.register(['angular2/core', "angular2/router", './dataService/data.service', './store/home.list', './store/product.list', './store/category.list', './store/brand.list', './store/productDetail.component', './store/search.component'], function(exports_1, context_1) {
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
    var core_1, router_1, data_service_1, home_list_1, product_list_1, category_list_1, brand_list_1, productDetail_component_1, search_component_1;
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
            function (home_list_1_1) {
                home_list_1 = home_list_1_1;
            },
            function (product_list_1_1) {
                product_list_1 = product_list_1_1;
            },
            function (category_list_1_1) {
                category_list_1 = category_list_1_1;
            },
            function (brand_list_1_1) {
                brand_list_1 = brand_list_1_1;
            },
            function (productDetail_component_1_1) {
                productDetail_component_1 = productDetail_component_1_1;
            },
            function (search_component_1_1) {
                search_component_1 = search_component_1_1;
            }],
        execute: function() {
            Store = (function () {
                function Store(_dataService, _router) {
                    this._dataService = _dataService;
                    this._router = _router;
                    this.homeData();
                }
                Store.prototype.homeData = function () {
                    var _this = this;
                    this._dataService.getCategories().subscribe(function (categories) {
                        _this.categories = categories;
                    });
                    this._dataService.getBrands().subscribe(function (brands) {
                        _this.brands = brands;
                    });
                };
                Store.prototype.gotoCategoryDetail = function (slug) {
                    console.log(slug);
                    this._router.navigate(['CategoryDetail', { categoryname: slug }]);
                    return false;
                };
                Store.prototype.gotoBrandDetail = function (slug) {
                    console.log(slug);
                    this._router.navigate(['BrandDetail', { brandname: slug }]);
                    return false;
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
                        templateUrl: '/app/views/main.view.html',
                        directives: [router_1.ROUTER_DIRECTIVES, search_component_1.Search]
                    }),
                    router_1.RouteConfig([
                        { path: '/', name: 'Home', component: home_list_1.HomeList },
                        { path: '/store', name: 'Products', component: product_list_1.ProductList },
                        { path: '/store/:productslug', name: 'ProductsDetail', component: productDetail_component_1.ProductDetail },
                        { path: '/store/category/:categoryname', name: 'CategoryDetail', component: category_list_1.CategoryList },
                        { path: '/store/brand/:brandname', name: 'BrandDetail', component: brand_list_1.BrandList }
                    ]), 
                    __metadata('design:paramtypes', [data_service_1.DataService, router_1.Router])
                ], Store);
                return Store;
            }());
            exports_1("Store", Store);
        }
    }
});
//# sourceMappingURL=app.index.js.map