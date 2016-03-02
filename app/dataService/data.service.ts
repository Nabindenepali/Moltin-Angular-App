import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Rx';
import {CategoryInterface} from 'data.interface';


@Injectable()
export class DataService{
    observable : Observable;
    publicId : string;
        moltin;
    constructor(){
        this.publicId = 'yxUnERm1C9z3h4eerRvGNwtdRC2cYcPMkW46fzwZ';
        this.moltin = new Moltin({publicId: this.publicId});
        this.moltin.Authenticate();
    }

    getAllProducts(){
        return this.moltin.Product.List();
    }
    getAllCategories() {
        //var promise = new Promise(resolve => {
        //    this.moltin.Category.List(null, function (res) {
        //        resolve(res);
        //    })
        //});

        return Observable.create((observer) => {
                this.moltin.Category.List(null, function (res) {
                    observer.next(res);
                })
        });
    }
}

