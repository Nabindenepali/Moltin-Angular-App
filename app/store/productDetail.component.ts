import {Component, View, OnInit} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {HTTP_PROVIDERS}    from 'angular2/http';

import {DataService} from '../dataService/data.service';
import {ProductInterface} from '../dataService/product.interface';


@Component({
    selector:'product-detail'
})

@View({
        template : `
        <div ngShow="loading"></div>
        <div *ngIf="product">
            <h1>{{product.title}}</h1>
        </div>
        `
})
export class ProductDetail{
    product : ProductInterface;
    constructor(
        private _dataService: DataService,
        private _routeParams: RouteParams
    ){}

    ngOnInit(){
        let slug = this._routeParams.get('productslug');
        this.getProduct(slug);
    }

    getProduct(slug:string){
        this._dataService.getProductDetail(slug).subscribe(
            product => {
                this.product = product[0];
                console.log(product);
            }
        )
    }
}