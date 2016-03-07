import {Injectable,OnInit} from 'angular2/core';
import {Observable} from 'rxjs/Rx';
import {Http, Response} from 'angular2/http';

import {CategoryInterface} from './data.interface';
import {Statics} from './service.details';
import {Headers} from "angular2/http";


@Injectable()
export class DataService implements OnInit{
    currentDate : Date = Math.floor(Date.now());
    //currentDate = '2457336575001';
    observable : Observable;
    moltin : any;

    constructor(private http:Http){
        this.authorize();
    }

    //authenticates with Moltin API and gets access token
    authorize(){
            this.moltin = new Moltin({publicId:Statics.PUBLIC_ID});
            this.moltin.Authenticate(
                function(response){
                    sessionStorage.setItem('access-token' , JSON.stringify(response)                )}
            );
    }

    getData(dataurl:string){
        //stores sessionStorage in a temp varirable
        var session = JSON.parse(sessionStorage.getItem('access-token'));
        console.log(session,this.currentDate);

        //Checks if Token has expired
        if (this.currentDate >= session.expires){
            this.authorize();
            console.log('new session');
        } else {
            console.log('valid session');
        }

        //gets data from API
        return this.http.get(dataurl,{
                    headers : new Headers({
                        "Authorization" : "Bearer " + session.token
                    })
                })
    }

    getCategories(){
        return this.getData('https://api.molt.in/v1/categories');
    }

    getAllProducts(){

    }



}

