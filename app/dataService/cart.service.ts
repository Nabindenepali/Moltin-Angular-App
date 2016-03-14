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
            .subscribe(
                res => console.log(res)
            )

    }

    getCartContent(){
        return this.http.get('https://api.molt.in/v1/carts/:'+ this.cartID,{
                headers : new Headers({
                    "Authorization" : "Bearer " + this.token
                })
            })
            .subscribe(
                cart => console.log(cart)
            )

    }

    addToCart(id:number,qty:number){
        if (qty == null){
            qty = 1;
        }
        return this.sendData('https://api.molt.in/v1/carts/:',id,qty)
    }

    private handleError (error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}