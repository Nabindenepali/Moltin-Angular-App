import {Component,View,OnInit} from 'angular2/core';
import {RouteConfig, ROUTER_PROVIDERS, ROUTER_DIRECTIVES} from "angular2/router";
import {Control} from 'angular2/common';
import {Observable} from 'rxjs/Observable';
import {HTTP_PROVIDERS}    from 'angular2/http';
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
    categories : CategoryInterface[];
    constructor(
        private _dataService : DataService
    ){
        this.getCategories();

    }

    getCategories(){
        this._dataService.getCategories()
            .subscribe(
              res => {
                  if (res.status === 200) {
                      this.categories = res.json().result
                  } else {
                      console.log("An error occurred calling moltin: " + res.status);
                  }
              }
        )
        //this._dataService.getData();
    }

    showNav(){
        this.toggleClass();
        this.getCategories();
    }

    toggleClass(){
        this.addClass = !this.addClass;
    }

}



