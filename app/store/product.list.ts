import {Component, View, OnInit} from 'angular2/core';
import {DataService} from '../dataService/data.service';
import {ProductInterface} from '../dataService/product.interface';
import {Router} from "angular2/router";

@Component({
    selector : 'product-list'
})

@View({
   templateUrl : '/app/views/productlist.partial.html'
})


export class ProductList implements OnInit{
        products : ProductInterface[];
        private isFetching: boolean = false;


    constructor(
      private _router : Router,
      private _dataService: DataService
    ){}

    ngOnInit(){
        this.getProducts();
    }
    getProducts(){
        this._dataService.getAllProducts().subscribe(
            products => {
                this.products = products;
                console.log(products);
                this.isFetching = true;
            }
        );

    }
    gotoDetail(slug:string) {
        console.log(slug);
        this._router.navigate(['ProductsDetail', {productslug:slug}]);
        return false;
    }
}
