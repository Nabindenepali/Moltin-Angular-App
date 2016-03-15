System.register(['angular2/core', "angular2/router", '../dataService/data.service', '../dataService/cart.service'], function(exports_1, context_1) {
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
    var core_1, router_1, data_service_1, cart_service_1;
    var HomeList;
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
            function (cart_service_1_1) {
                cart_service_1 = cart_service_1_1;
            }],
        execute: function() {
            HomeList = (function () {
                function HomeList(_router, _dataService, _cartService) {
                    this._router = _router;
                    this._dataService = _dataService;
                    this._cartService = _cartService;
                    this.isFetching = false;
                    this.emitCart = new core_1.EventEmitter();
                }
                HomeList.prototype.ngOnInit = function () {
                    this.title = 'Featured Products';
                    this.getfeaturedproducts();
                };
                HomeList.prototype.getfeaturedproducts = function () {
                    var _this = this;
                    this._dataService.getFeatured().subscribe(function (products) {
                        _this.products = products;
                        _this.isFetching = true;
                    });
                };
                HomeList.prototype.gotoDetail = function (slug) {
                    console.log(slug);
                    this._router.navigate(['ProductsDetail', { productslug: slug }]);
                    return false;
                };
                HomeList.prototype.getCart = function () {
                    var _this = this;
                    this._cartService.getCartContent().subscribe(function (cartContent) {
                        _this.emitCart.emit(cartContent.result.total_items);
                    });
                };
                HomeList.prototype.addtoCart = function (id) {
                    var _this = this;
                    this._cartService.addToCart(id).subscribe(function (cartItem) {
                        _this.getCart();
                    });
                    return false;
                };
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], HomeList.prototype, "emitCart", void 0);
                HomeList = __decorate([
                    core_1.Component({
                        selector: 'home-list',
                        providers: [cart_service_1.CartService]
                    }),
                    core_1.View({
                        templateUrl: '/app/views/list-product.partial.html'
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, data_service_1.DataService, cart_service_1.CartService])
                ], HomeList);
                return HomeList;
            }());
            exports_1("HomeList", HomeList);
        }
    }
});
//# sourceMappingURL=home.list.js.map