import {Component,View} from 'angular2/core';
import {RouteConfig, ROUTER_PROVIDERS, ROUTER_DIRECTIVES} from "angular2/router";

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
        component : ProductList,
        useAsDefault : true
    },
    {
        path: '/categories',
        name : 'Categories',
        component : CategoryList
    }
])


export class Store{

}



