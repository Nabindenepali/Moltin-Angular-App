import {Component, View, OnInit,Output,EventEmitter} from 'angular2/core';
import {Router,RouteParams} from "angular2/router";

import {DataService} from '../dataService/data.service';
import {ProductInterface} from '../dataService/product.interface';
import {CartService} from '../dataService/cart.service';



@Component({
    selector : 'category-list',
    providers : [CartService]
})

@View({
    templateUrl :'/app/views/list-product.partial.html'
})


export class CategoryList implements OnInit{
    products:ProductInterface[];
    title : string;
    categoryName: string;
    private isFetching: boolean = false;
    @Output() emitCart = new EventEmitter();


    constructor(
        private _router : Router,
        private _routeParams: RouteParams,
        private _dataSevice: DataService,
        private _cartService: CartService
    ){}

    ngOnInit(){
        let slug = this._routeParams.get('categoryname');
        this.getproductsbycategory(slug);
        this.title = 'Products in category: ' + slug.replace(/-/g,' ');
    }

    getproductsbycategory(slug:string){
        this.categoryName = slug;
        this._dataSevice.getProductByCategory(slug).subscribe(
            products => {
                this.products = products;
                this.isFetching = true
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
