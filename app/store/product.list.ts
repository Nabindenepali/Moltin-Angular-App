import {Component, View, OnInit} from 'angular2/core';
import {DataService} from '../dataService/data.service';
import {ProductInterface} from '../dataService/product.interface';
import {Router} from "angular2/router";

@Component({
    selector : 'product-list'
})

@View({
   templateUrl : '/app/views/productlist.view.html'
})


export class ProductList implements OnInit{
        products : ProductInterface[];


    constructor(
      private _router : Router,
      private _dataSevice: DataService
    ){}

    ngOnInit(){
        this.getProducts();
    }
    getProducts(){
        return this._dataSevice.getAllProducts()
            .subscribe(products => this.products = products)
    }
    gotoDetail(slug:string) {
        console.log(slug);
        this._router.navigate(['ProductsDetail', {productslug:slug}]);
        //return false;
    }
}
