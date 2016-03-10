System.register(['angular2/core', 'angular2/router', '../dataService/data.service'], function(exports_1, context_1) {
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
    var core_1, router_1, data_service_1;
    var ProductDetail;
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
            }],
        execute: function() {
            ProductDetail = (function () {
                function ProductDetail(_dataService, _routeParams) {
                    this._dataService = _dataService;
                    this._routeParams = _routeParams;
                    this.isFetching = false;
                }
                ProductDetail.prototype.ngOnInit = function () {
                    var slug = this._routeParams.get('productslug');
                    this.getProduct(slug);
                };
                ProductDetail.prototype.getProduct = function (slug) {
                    var _this = this;
                    this._dataService.getProductDetail(slug).subscribe(function (product) {
                        _this.product = product[0];
                        _this.isFetching = true;
                    });
                };
                ProductDetail = __decorate([
                    core_1.Component({
                        selector: 'product-detail'
                    }),
                    core_1.View({
                        templateUrl: '/app/views/productDetail.view.html'
                    }), 
                    __metadata('design:paramtypes', [data_service_1.DataService, router_1.RouteParams])
                ], ProductDetail);
                return ProductDetail;
            }());
            exports_1("ProductDetail", ProductDetail);
        }
    }
});
//# sourceMappingURL=productDetail.component.js.map