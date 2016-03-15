System.register(['angular2/core', '../dataService/data.service', "angular2/router"], function(exports_1) {
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
    var CategoryList;
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
            CategoryList = (function () {
                function CategoryList(_router, _routeParams, _dataSevice) {
                    this._router = _router;
                    this._routeParams = _routeParams;
                    this._dataSevice = _dataSevice;
                    this.isFetching = false;
                }
                CategoryList.prototype.ngOnInit = function () {
                    var slug = this._routeParams.get('categoryname');
                    this.getproductsbycategory(slug);
                    this.title = 'Products in category: ' + slug.replace(/-/g, ' ');
                };
                CategoryList.prototype.getproductsbycategory = function (slug) {
                    var _this = this;
                    this.categoryName = slug;
                    this._dataSevice.getProductByCategory(slug).subscribe(function (products) {
                        _this.products = products;
                        _this.isFetching = true;
                    });
                };
                CategoryList.prototype.gotoDetail = function (slug) {
                    console.log(slug);
                    this._router.navigate(['ProductsDetail', { productslug: slug }]);
                    return false;
                };
                CategoryList = __decorate([
                    core_1.Component({
                        selector: 'category-list'
                    }),
                    core_1.View({
                        templateUrl: '/app/views/list-product.partial.html'
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, router_1.RouteParams, data_service_1.DataService])
                ], CategoryList);
                return CategoryList;
            })();
            exports_1("CategoryList", CategoryList);
        }
    }
});
//# sourceMappingURL=category.list.js.map