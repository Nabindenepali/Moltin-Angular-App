import {Component, View, OnInit} from 'angular2/core';
import {DataService} from '../dataService/data.service';
import {ProductInterface} from '../dataService/product.interface';
import {Router,RouteParams} from "angular2/router";

@Component({
    selector : 'category-list'
})

@View({
    templateUrl : '/app/views/productlist.partial.html'
})


export class CategoryList implements OnInit{
    products:ProductInterface[];
    categoryName: string;
    private isFetching: boolean = false;


    constructor(
        private _router : Router,
        private _routeParams: RouteParams,
        private _dataSevice: DataService
    ){}

    ngOnInit(){
        let slug = this._routeParams.get('categoryname');
        this.getproductsbycategory(slug);
    }

    getproductsbycategory(slug:string){
        this.categoryName = slug;
        this._dataSevice.getProductByCategory(slug).subscribe(
            products => {
                this.products = products;
                this.isFetching = true
            }
        )
    }



    gotoDetail(slug:string) {
        console.log(slug);
        this._router.navigate(['ProductsDetail', {productslug:slug}]);
        return false;
    }
}
