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
    var ProductList;
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
            ProductList = (function () {
                function ProductList(_router, _dataSevice) {
                    this._router = _router;
                    this._dataSevice = _dataSevice;
                }
                ProductList.prototype.ngOnInit = function () {
                    this.getProducts();
                };
                ProductList.prototype.getProducts = function () {
                    this.products = this._dataSevice.getAllProducts();
                    console.log(this._dataSevice.getAllProducts());
                };
                ProductList = __decorate([
                    core_1.Component({
                        selector: 'product-list'
                    }),
                    core_1.View({
                        templateUrl: '/app/views/productlist.view.html'
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, data_service_1.DataService])
                ], ProductList);
                return ProductList;
            }());
            exports_1("ProductList", ProductList);
        }
    }
});
//# sourceMappingURL=product.list.js.map