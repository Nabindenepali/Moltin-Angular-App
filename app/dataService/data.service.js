System.register(['angular2/core', 'rxjs/Rx', 'angular2/http'], function(exports_1, context_1) {
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
    var core_1, Rx_1, http_1;
    var DataService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            DataService = (function () {
                function DataService(http) {
                    this.http = http;
                }
                DataService.prototype.fetchData = function (dataurl) {
                    var token = sessionStorage.getItem('access-token');
                    return this.http.get(dataurl, {
                        headers: new http_1.Headers({
                            "Authorization": "Bearer " + token
                        })
                    })
                        .map(function (data) { return data.json().result; })
                        .catch(this.handleError);
                };
                DataService.prototype.getAllProducts = function () {
                    return this.fetchData('https://api.molt.in/v1/products');
                };
                DataService.prototype.getProductDetail = function (slug) {
                    return this.fetchData('https://api.molt.in/v1/products?slug=' + slug);
                };
                DataService.prototype.getProductByBrand = function (slug) {
                    return this.fetchData('https://api.molt.in/v1/products?brand.slug=' + slug);
                };
                DataService.prototype.getCategories = function () {
                    return this.fetchData('https://api.molt.in/v1/categories');
                };
                DataService.prototype.getFeatured = function (slug) {
                    return this.fetchData('https://api.molt.in/v1/products?collection.slug=featured-products');
                };
                DataService.prototype.getCategoryID = function (slug) {
                    return this.fetchData('https://api.molt.in/v1/categories/search?slug=' + slug);
                };
                DataService.prototype.getProductByCategory = function (slug) {
                    return this.fetchData('https://api.molt.in/v1/products?category.slug=' + slug);
                };
                DataService.prototype.getBrands = function () {
                    return this.fetchData('https://api.molt.in/v1/brands');
                };
                DataService.prototype.handleError = function (error) {
                    console.error(error);
                    return Rx_1.Observable.throw(error.json().error || 'Server error');
                };
                DataService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], DataService);
                return DataService;
            }());
            exports_1("DataService", DataService);
        }
    }
});
//# sourceMappingURL=data.service.js.map