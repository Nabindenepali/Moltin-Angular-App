import {Component, Input, OnInit} from '@angular/core';
import {IProduct} from '../product';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import 'rxjs/add/operator/switchMap';
import {ProductsService} from '../product-service/products.service';

@Component({
  selector: 'moltin-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  @Input() product: IProduct;

  constructor(private _route: ActivatedRoute, private _router: Router, private _location: Location, private _productsService: ProductsService) { }

  ngOnInit() {
    this._productsService.getProduct(this._route.snapshot.paramMap.get('id')).subscribe(product => {
      this.product = product;
      this._productsService.getImageSource(product.relationships['main_image'].data.id).subscribe(imgSource => {
        this.product.imgSource = imgSource;
      });
    });
  }

  editProduct() {
    console.log(this.product);
    this._router.navigate(['dashboard/product/new', {product: this.product}]);
  }

  deleteProduct() {
    console.log('Delete method called');
  }

  // goBack(): void { // Implement go back method
  //   this._location.back();
  // }

}
