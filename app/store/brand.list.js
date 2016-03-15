System.register(['angular2/core', '../dataService/data.service', "angular2/router"], function(exports_1, context_1) {
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
    var core_1, data_service_1, router_1;
    var BrandList;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (data_service_1_1) {
                data_service_1 = data_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            BrandList = (function () {
                function BrandList(_router, _routeParams, _dataSevice) {
                    this._router = _router;
                    this._routeParams = _routeParams;
                    this._dataSevice = _dataSevice;
                    this.isFetching = false;
                }
                BrandList.prototype.ngOnInit = function () {
                    var slug = this._routeParams.get('brandname');
                    this.getproductsbybrand(slug);
                    this.title = 'Products of brand: ' + slug.replace(/-/g, ' ');
                };
                BrandList.prototype.getproductsbybrand = function (slug) {
                    var _this = this;
                    this.brandName = slug;
                    this._dataSevice.getProductByBrand(slug).subscribe(function (products) {
                        _this.products = products;
                        console.log(products);
                        _this.isFetching = true;
                    });
                };
                BrandList.prototype.gotoDetail = function (slug) {
                    console.log(slug);
                    this._router.navigate(['ProductsDetail', { productslug: slug }]);
                    return false;
                };
                BrandList = __decorate([
                    core_1.Component({
                        selector: 'brand-list'
                    }),
                    core_1.View({
                        templateUrl: '/app/views/list-product.partial.html'
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, router_1.RouteParams, data_service_1.DataService])
                ], BrandList);
                return BrandList;
            }());
            exports_1("BrandList", BrandList);
        }
    }
});
//# sourceMappingURL=brand.list.js.map