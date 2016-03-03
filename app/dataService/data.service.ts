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
                return Observable.create((observer) => {
                this.moltin.Category.List(null, function (res) {
                    console.log(res);
                    observer.next(res);
                })
        });
    }

    searchProducts(searchTerms :string){
            return Observable.create((observer) => {
                this.moltin.Product.Search({title:searchTerms}, function(products){
                    observer.next(products);
                })
            })
    }

}

