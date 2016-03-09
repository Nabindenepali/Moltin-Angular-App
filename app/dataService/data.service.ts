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

    getAccessToken(){
        console.log('getaccess this has hit');
        var creds = "client_id=" + Statics.PUBLIC_ID +  "&grant_type=implicit";         this.http.post('https://api.molt.in/oauth/access_token?',creds)                     .subscribe(response =>  this.saveToken(response.json()))
    }

    saveToken(accessres:any){
        //sessionStorage.clear();
        console.log('set this has hit');
        var token = JSON.stringify(accessres.access_token);
        var expires = JSON.stringify(accessres.expires);
        sessionStorage.setItem('access-token' , JSON.parse(expires));
        sessionStorage.setItem('expires' , JSON.parse(token));
        console.log(sessionStorage);
    }

}
