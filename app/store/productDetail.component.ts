import {Component, View, OnInit,Output,EventEmitter} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {HTTP_PROVIDERS}    from 'angular2/http';

import {DataService} from '../dataService/data.service';
import {ProductInterface} from '../dataService/product.interface';
import {CartService} from '../dataService/cart.service';


@Component({
    selector:'product-detail',
    providers :[CartService]
})

@View({
        templateUrl :'/app/views/productDetail.partial.html'
})
export class ProductDetail{
    product : ProductInterface;
    private isFetching: boolean = false;
    @Output() emitCart = new EventEmitter();

    constructor(
        private _dataService: DataService,
        private _routeParams: RouteParams,
        private _cartService: CartService
    ){}

    ngOnInit(){
        let slug = this._routeParams.get('productslug');
        this.getProduct(slug);
    }

    getProduct(slug:string){
        this._dataService.getProductDetail(slug).subscribe(
            product => {
                this.product = product[0];
                this.isFetching = true;

            }
        )
    }

    getCart(){
        this._cartService.getCartContent().subscribe(
            cartContent => {
                this.emitCart.emit(cartContent.result.total_items);
            }
        );
    }

    addtoCart(id:number,qty:number,selector){
        console.log(qty,id);
        selector.active = true;

        this._cartService.addToCart(id,qty).subscribe(
            cartItem => {
                this.getCart();
                selector.active = false;
            },
            err => {
                let error = JSON.parse(err._body);
                alert(error.errors[0]);
                selector.active = false;
                //alert()
            }

        )

    }
}