import {Injectable,OnInit} from 'angular2/core';
import {Observable} from 'rxjs/Rx';
import {Statics} from './service.details';
import {Http, Response, Headers} from 'angular2/http';

@Injectable()
export class CartService{
    cartID:string = sessionStorage.getItem('cartID');
    token:string = sessionStorage.getItem('access-token');

    constructor(private http:Http){}

    sendData(url:string,productid:number,productquantity:number){

        let carturl = url + this.cartID;
        let params = "id=" + productid + "&quantity=" + productquantity;
        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('Authorization', 'Bearer ' + this.token);
        return this.http.post(carturl,params,{headers : headers})
            .map(res => JSON.parse(res._body))
            //.catch(this.handleError())
    }


    getCartContent(){
        return this.http.get('https://api.molt.in/v1/carts/:'+ this.cartID,{
                headers : new Headers({
                    "Authorization" : "Bearer " + this.token
                })
            })
            .map(res => JSON.parse(res._body))
            //.catch(res => console.log(res))

    }

    addToCart(id:number,qty:number){
        if (qty == null){
            qty = 1;
        }
        return this.sendData('https://api.molt.in/v1/carts/:',id,qty)
    }
    //THis needs fixing
    private handleError (error: Response) {
        console.error(error[0]);
        //return Observable.throw(error.errors || 'Server error');
    }
}