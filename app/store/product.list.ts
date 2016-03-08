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
    ){
        this._dataSevice.authorize();

    }

    ngOnInit(){
        this.getProducts();
    }
    getProducts(){
        //this._dataSevice.getAllProducts()
        //    .subscribe(
        //    res => {
        //        if(res.status === 200 ){
        //            this.products = res.json().result;
        //        } else {
        //            console.log("An error occurred calling moltin: " + res.status);
        //        }
        //    }
        //)
        //this._dataSevice.accessChecker();
        //this._dataSevice.getData();

        return this._dataSevice.getAllProducts().subscribe(
            products => this.products = products

        )

    }
}
