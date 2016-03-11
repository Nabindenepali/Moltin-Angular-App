import {Component, View, OnInit} from 'angular2/core';
import {DataService} from '../dataService/data.service';
import {ProductInterface} from '../dataService/product.interface';
import {Router,RouteParams} from "angular2/router";

@Component({
    selector : 'brand-list'
})

@View({
    templateUrl :'/app/views/list-product.partial.html'
})

export class BrandList implements OnInit{
    products:ProductInterface[];
    title : string;
    brandName : string;

    private isFetching: boolean = false;

    constructor(
        private _router : Router,
        private _routeParams: RouteParams,
        private _dataSevice: DataService
    ){}

    ngOnInit(){
        let slug = this._routeParams.get('brandname');
        this.getproductsbybrand(slug);
        this.title = 'Products of brand: ' + slug.replace(/-/g,' ');
    }

    getproductsbybrand(slug:string){
        this.brandName = slug;
        this._dataSevice.getProductByBrand(slug).subscribe(
            products => {
                this.products = products;
                console.log(products);
                this.isFetching = true;
            }
        )
    }

    gotoDetail(slug:string) {
        console.log(slug);
        this._router.navigate(['ProductsDetail', {productslug:slug}]);
        return false;
    }



}