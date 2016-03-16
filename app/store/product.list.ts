import {Component, View, OnInit,Output,EventEmitter} from 'angular2/core';
import {Router} from "angular2/router";

import {DataService} from '../dataService/data.service';
import {ProductInterface} from '../dataService/product.interface';
import {CartService} from '../dataService/cart.service';


@Component({
    selector : 'product-list',
    providers :[CartService]
})

@View({
    templateUrl :'/app/views/list-product.partial.html'
})


export class ProductList implements OnInit{
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
        this.title = 'All Products';
        this.getProducts();
    }
    getProducts(){
        this._dataService.getAllProducts().subscribe(
            products => {
                this.products = products;
                //console.log(products);
                this.isFetching = true;
            }
        );

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

    addtoCart(selector:ProductInterface,id:number){

        this.removeClassfromOthers(this.products);
        selector.active = true;

        this._cartService.addToCart(id).subscribe(
            cartItem =>{
                this.getCart();
                selector.active = false;
            }
        )
        return false;
    }

    removeClassfromOthers(selectors){
        selectors.forEach((selector)=>selector.active = false);
    }
}
