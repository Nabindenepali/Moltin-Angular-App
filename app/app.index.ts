import {Component,View,OnInit} from 'angular2/core';
import {RouteConfig, ROUTER_PROVIDERS, ROUTER_DIRECTIVES,Router} from "angular2/router";
import {Control} from 'angular2/common';
import {Observable} from 'rxjs/Observable';
import {HTTP_PROVIDERS}    from 'angular2/http';

import {DataService} from './dataService/data.service';
import {CategoryInterface} from './dataService/data.interface';
import {BrandsInterface} from './dataService/brands.interface'
import {ProductList} from './store/product.list';
import {CategoryList} from './store/category.list';
import {ProductDetail} from './store/productDetail.component';
import {Search} from './store/search.component';

@Component({
    selector : 'store-app'
})

@View({
        templateUrl : '/app/views/main.view.html',
        directives : [ROUTER_DIRECTIVES,Search]
})

@RouteConfig([
    {path: '/store',name : 'Products',component : ProductList,useAsDefault: true},
    {path:'/store/:productslug',name : 'ProductsDetail',component : ProductDetail},
    {path:'/store/category/:categoryname',name : 'CategoryDetail',component : CategoryList}
])


export class Store implements OnInit{
    categories : CategoryInterface[];
    brands: BrandsInterface[];
    constructor(
        private _dataService : DataService,
        private _router : Router
    ){
        this.homeData();
    }

    homeData(){
        this._dataService.getCategories().subscribe(
            categories => {
                this.categories = categories;
            }
        )
        this._dataService.getBrands().subscribe(
            brands => {
                this.brands = brands;

            }
        )
    }
    gotoCategoryDetail(slug:string) {
        console.log(slug);
        this._router.navigate(['CategoryDetail', {categoryname:slug}]);
        return false;
    }


    gotoBrandDetail(){

    }

    showNav(){
        this.toggleClass();
    }

    toggleClass(){
        this.addClass = !this.addClass;
    }

}



