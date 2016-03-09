import {Component, View, OnInit} from 'angular2/core';
import {Control} from 'angular2/common';

import{DataService} from '../dataService/data.service';
import {Observable} from "rxjs/Observable";


@Component({
    selector : 'search'
})

@View({
    templateUrl : '/app/views/searchTop.html'
})

export class Search{
        term = new Control();
        items;

        constructor(
            private _dataService:DataService
        ){}

        search(searchParams:string){
            var that = this;
            this._dataService.authenticate()

                .then(
                response => {
                    this._dataService.moltin.Product.Search({title:searchParams}, function(products) {
                        that.items = products
                    })
                }
            )
        }

}