import {Injectable} from 'angular2/core';

@Injectable()
export class DataService{
    publicId : string;
    moltin;
    constructor(){
        this.publicId = 'gF543ALI2PxZnQYjsTufT5RA6u7fnNemnnTX0gPh';
        this.moltin = new Moltin({publicId: this.publicId});
        this.moltin.Authenticate();
    }

    getAllProducts(){
        return this.moltin.Product.List();
    }
    getAllCategories(){
        return this.moltin.Category.List();
    }
}

