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
      private _dataService: DataService
    ){}

    ngOnInit(){
        this.getProducts();
    }
    getProducts(){
        var that = this;
        this._dataService.authenticate().then(
            response => {
                this._dataService.moltin.Product.List(null, function(products) {
                    that.products = products
                    console.log(products);
                })
            }
        )
    }
    gotoDetail(slug:string) {
        console.log(slug);
        this._router.navigate(['ProductsDetail', {productslug:slug}]);
        //return false;
    }
}
