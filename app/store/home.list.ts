import {Component,View,OnInit,Output,EventEmitter} from 'angular2/core';
import {Router} from "angular2/router";

import {ProductInterface} from '../dataService/product.interface';
import {DataService} from '../dataService/data.service';
import {CartService} from '../dataService/cart.service';
import {CartStatus} from "./cartupdate.component";

@Component({
    selector :'home-list',
    providers :[CartService]


})

@View({
    templateUrl :'/app/views/list-product.partial.html'

})

export class HomeList{
    title: string;
    products : ProductInterface[];
    private isFetching: boolean = false;
    @Output() emitCart = new EventEmitter();

    constructor(
        private _router : Router,
        private _dataService: DataService,
        private _cartService: CartService

    ){}

    ngOnInit(){
        this.title = 'Featured Products';
        this.getfeaturedproducts();
    }
    getfeaturedproducts(){
        this._dataService.getFeatured().subscribe(
            products => {
                this.products = products;
                this.isFetching = true;
            }
        )
    }

    gotoDetail(slug:string) {
        console.log(slug);
        this._router.navigate(['ProductsDetail', {productslug:slug}]);
        return false;
    }

    getCart(){
        this._cartService.getCartContent().subscribe(
            cartContent => {
                this.emitCart.emit(cartContent.result.total_items);
            }
        );
    }
    addtoCart(id:number){
        this._cartService.addToCart(id).subscribe(
            cartItem =>{
                this.getCart();
            }
        )
        return false;
    }

}