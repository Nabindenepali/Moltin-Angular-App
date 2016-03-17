import {Component,View,OnInit,ViewChild} from 'angular2/core';
import {RouteConfig, ROUTER_PROVIDERS, ROUTER_DIRECTIVES,Router} from "angular2/router";
import {Control} from 'angular2/common';
import {Observable} from 'rxjs/Observable';
import {HTTP_PROVIDERS}    from 'angular2/http';

import {DataService} from './dataService/data.service';
import {CategoryInterface} from './dataService/data.interface';
import {BrandsInterface} from './dataService/brands.interface';
import {CartInterface} from './dataService/cart.interface';
import {HomeList} from './store/home.list';
import {ProductList} from './store/product.list';
import {CategoryList} from './store/category.list';
import {BrandList} from './store/brand.list'
import {ProductDetail} from './store/productDetail.component';
import {Search} from './store/search.component';




@Component({
    selector : 'store-app'
})

@View({
        templateUrl : '/app/views/main.view.html',
        directives : [ROUTER_DIRECTIVES,Search,HomeList,ProductList,CategoryList,ProductDetail]
})

@RouteConfig([
    {path: '/',name : 'Home',component : HomeList},
    {path: '/store',name : 'Products',component : ProductList},
    {path:'/store/:productslug',name : 'ProductsDetail',component : ProductDetail},
    {path:'/store/category/:categoryname',name : 'CategoryDetail',component : CategoryList},
    {path:'/store/brand/:brandname',name : 'BrandDetail',component : BrandList}
])


export class Store implements OnInit{
    categories : CategoryInterface[];
    brands: BrandsInterface[];
    cart:CartInterface[] = 0 ;
    private isFetching: boolean = false;

    @ViewChild(HomeList) home: HomeList;
    @ViewChild(ProductList) products: ProductList;
    @ViewChild(CategoryList) category: CategoryList;
    @ViewChild(BrandList) brand: BrandList;
    @ViewChild(ProductDetail) productDet: ProductDetail;

    constructor(
        private _dataService : DataService,
        private _router : Router

    ){
        let cartID = Math.floor(100000 + Math.random() * 900000);
        sessionStorage.setItem('cartID' , JSON.parse(cartID));
        this.homeData();

        // This is just a workaround will change with angular 2
        let subs = null;
        _router.subscribe(() => {
            if (subs) {
                subs.unsubscribe();
                subs = null;
            }

            if (this.home) {
                subs = this.home.emitCart.subscribe(
                    message => {
                        this.clik(message);
                    }
                );
            }
            if (this.products) {
                subs = this.products.emitCart.subscribe(
                    message => {
                        this.clik(message);
                    }
                );
            }
            if (this.category) {
                subs = this.category.emitCart.subscribe(
                    message => {
                        this.clik(message);
                    }
                );
            }
            if (this.brand) {
                subs = this.brand.emitCart.subscribe(
                    message => {
                        this.clik(message);
                    }
                );
            }
            if (this.productDet) {
                subs = this.productDet.emitCart.subscribe(
                    message => {
                        this.clik(message);
                    }
                );
            }

        });

    }

    homeData(){

        this._dataService.getCategories().subscribe(
            categories => {
                this.categories = categories;
                this.isFetching = true;
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

    gotoBrandDetail(slug:string){
        console.log(slug);
        this._router.navigate(['BrandDetail', {brandname:slug}]);
        return false;
    }
    clik(m:string){
        this.cart = m;
    }

    onVoted(agreed: boolean) {
        console.log('triggered');

    }


}





