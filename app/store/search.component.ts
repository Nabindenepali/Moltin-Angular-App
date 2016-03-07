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
        items:Observable<string[]>;

        constructor(private _dataService:DataService){
            this.items = this.term.valueChanges
                .debounceTime(400)
                .distinctUntilChanged()
                .switchMap(term => this._dataService.search(term))

        }
}