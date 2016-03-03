import {Component,View,OnInit} from 'angular2/core';
import {RouteConfig, ROUTER_PROVIDERS, ROUTER_DIRECTIVES} from "angular2/router";
import {Control} from 'angular2/common';
import {Observable} from 'rxjs/Observable';

import {DataService} from './dataService/data.service';
import {CategoryInterface} from './dataService/data.interface';
import {ProductList} from './store/product.list';
import {CategoryList} from './store/category.list';

@Component({
    selector : 'store-app'
})

@View({
        templateUrl : '/app/views/navigation.view.html',
        directives : [ROUTER_DIRECTIVES]
})

@RouteConfig([
    {
        path: '/store',
        name : 'Products',
        component : ProductList
    }
])


export class Store implements OnInit{
    addClass:Boolean = false;
    categories : CategoryInterface[];
    searchitems: Observable<Array<string>>;
    term = new Control();

    constructor(
        private _dataService : DataService
    ){
        this.term.valueChanges
            .debounceTime(400)
            .subscribe(
                term => this._dataService.searchProducts(term)
                    .subscribe(items => this.searchitems = items));
    }


    getCategories(){
        this._dataService.getAllCategories()
            .distinctUntilChanged()
            .subscribe(
            dat => this.categories = dat
        )
    }

    showNav(){
        this.toggleClass();
        this.getCategories();
    }

    toggleClass(){
        this.addClass = !this.addClass;
    }

}



