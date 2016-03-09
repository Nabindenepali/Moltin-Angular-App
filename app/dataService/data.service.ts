import {Injectable,OnInit} from 'angular2/core';
import {Statics} from './service.details';
import {Http, Response, Headers} from 'angular2/http';



@Injectable()
export class DataService implements OnInit{
    moltin : any;

    constructor(private http:Http){
        this.moltin = new Moltin({publicId:Statics.PUBLIC_ID});
    }

    authenticate(){
        return new Promise ((resolve,reject)=>{
            this.moltin.Authenticate(function (response) {
                resolve(response);
            })
        })
    }

    accessToken(){
        var id = Statics.PUBLIC_ID;
        //var secret = Statics.SECRET;
        var creds = "client_id=" + id +  "&grant_type=implicit";
        console.log(creds);
        return this.http.post('https://api.molt.in/oauth/access_token?',creds)

    }

}
