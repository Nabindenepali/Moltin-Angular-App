import {Component,View,OnInit} from 'angular2/core';
import {RouteConfig, ROUTER_PROVIDERS, ROUTER_DIRECTIVES} from "angular2/router";
import {Control} from 'angular2/common';
import {Observable} from 'rxjs/Observable';
import {HTTP_PROVIDERS}    from 'angular2/http';
import {DataService} from './dataService/data.service';
import {CategoryInterface} from './dataService/data.interface';
import {ProductList} from './store/product.list';
import {CategoryList} from './store/category.list';
import {Search} from './store/search.component';

@Component({
    selector : 'store-app'
})

@View({
        templateUrl : '/app/views/navigation.view.html',
        directives : [ROUTER_DIRECTIVES,Search]
})

@RouteConfig([
    {
        path: '/store',
        name : 'Products',
        component : ProductList,
        useAsDefault : true
    }
])


export class Store implements OnInit{
    categories : CategoryInterface[];
    constructor(
        private _dataService : DataService
    ){}

    getCategories(){
        this._dataService.getCategories()
            .subscribe(
              categories => this.categories = categories
        )
        //this._dataService.getData();
    }

    showNav(){
        this.toggleClass();
    }

    toggleClass(){
        this.addClass = !this.addClass;
    }

}



