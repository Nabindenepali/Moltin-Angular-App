System.register(['angular2/core', 'rxjs/Rx', 'angular2/http'], function(exports_1) {
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
    var CartService;
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
            CartService = (function () {
                function CartService(http) {
                    this.http = http;
                    this.cartID = sessionStorage.getItem('cartID');
                    this.token = sessionStorage.getItem('access-token');
                }
                CartService.prototype.sendData = function (url, productid, productquantity) {
                    var carturl = url + this.cartID;
                    var params = "id=" + productid + "&quantity=" + productquantity;
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/x-www-form-urlencoded');
                    headers.append('Authorization', 'Bearer ' + this.token);
                    return this.http.post(carturl, params, { headers: headers })
                        .map(function (res) { return JSON.parse(res._body); });
                    //.catch(this.handleError())
                };
                CartService.prototype.getCartContent = function () {
                    return this.http.get('https://api.molt.in/v1/carts/:' + this.cartID, {
                        headers: new http_1.Headers({
                            "Authorization": "Bearer " + this.token
                        })
                    })
                        .map(function (res) { return JSON.parse(res._body); });
                    //.catch(this.handleError(res))
                };
                CartService.prototype.addToCart = function (id, qty) {
                    if (qty == null) {
                        qty = 1;
                    }
                    return this.sendData('https://api.molt.in/v1/carts/:', id, qty);
                };
                CartService.prototype.test = function () {
                    return 'bb';
                };
                CartService.prototype.handleError = function (error) {
                    console.error(error);
                    return Rx_1.Observable.throw(error.errors || 'Server error');
                };
                CartService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], CartService);
                return CartService;
            })();
            exports_1("CartService", CartService);
        }
    }
});
//# sourceMappingURL=cart.service.js.map