import {Component, OnInit} from '@angular/core';
import 'rxjs/add/operator/filter';
import {ProductsService} from '../product-service/products.service';
import {IProduct} from '../product';

@Component({
  selector: 'moltin-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: IProduct[] = [];

  constructor(private _productsService: ProductsService) { }

  ngOnInit() {
    this._productsService.getProducts().subscribe(products => {
      this.products = products;
      for (const product of this.products) {
        this._productsService.getImageSource(product.relationships['main_image'].data.id).subscribe(imgSource => {
          product.imgSource = imgSource;
        });
      }
    });
  }

}
