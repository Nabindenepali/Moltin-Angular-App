import {Injectable,OnInit} from 'angular2/core';
import {Statics} from './service.details';



@Injectable()
export class DataService implements OnInit{
    moltin : any;

    constructor(){
        this.moltin = new Moltin({publicId:Statics.PUBLIC_ID});
    }

    authenticate(){
        return new Promise ((resolve,reject)=>{
            this.moltin.Authenticate(function (response) {
                resolve(response);
            })
        })
    }

}
