import {Component,View,OnInit} from 'angular2/core';
import {Router} from "angular2/router";

import {ProductInterface} from '../dataService/product.interface';
import {DataService} from '../dataService/data.service'

@Component({
    selector :'home-list'
})

@View({
    templateUrl :'/app/views/list-product.partial.html'
})

export class HomeList{
    title: string;
    products : ProductInterface[];
    private isFetching: boolean = false;

    constructor(
        private _router : Router,
        private _dataService: DataService
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
                console.log(products)
            }
        )
    }

    gotoDetail(slug:string) {
        console.log(slug);
        this._router.navigate(['ProductsDetail', {productslug:slug}]);
        return false;
    }

}