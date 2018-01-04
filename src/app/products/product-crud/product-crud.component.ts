import {Component, ElementRef, OnInit} from '@angular/core';
import {IProduct} from '../product';
import {ProductsService} from '../product-service/products.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import 'rxjs/add/operator/mergeMap';
import {GlobalDataService} from '../../shared/service/globaldata/globaldata.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'moltin-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.scss']
})
export class ProductCrudComponent implements OnInit {

  productForm: FormGroup;

  statuses = ['live', 'draft'];
  cmtypes = ['physical', 'digital'];

  product: IProduct;

  image: File;

  constructor(private _productService: ProductsService, private _elementRef: ElementRef, private _fb: FormBuilder, private _globalDataService: GlobalDataService, private _route: ActivatedRoute) {

    this.productForm = this._fb.group({
      commodity_type: [null, Validators.required],
      description: [null, Validators.compose([Validators.required, Validators.minLength(20), Validators.maxLength(200)])],
      manage_stock: '',
      name: [null, Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(100)])],
      sku: [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(50)])],
      slug: [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(50)])],
      status: [null, Validators.required],
      stock: [null, Validators.required],
      price: [null, Validators.required]
    });

    this.product = this._route.snapshot.params['product'];

    console.log(this._route);

    this.productForm.patchValue({
      commodity_type: this.product.commodity_type,
      description: this.product.description,
      manage_stock: this.product.manage_stock,
      name: this.product.name,
      sku: this.product.sku,
      slug: this.product.slug,
      status: this.product.status
      // stock: this.product.meta['stock'],
      // price: this.product.price['amount']
    });

  }

  ngOnInit() {
  }

  addProduct(newProduct): void {
    this.product = {
      commodity_type: newProduct.commodity_type,
      description: newProduct.description,
      manage_stock: newProduct.manage_stock,
      name: newProduct.name,
      sku: newProduct.sku,
      slug: newProduct.slug,
      status: newProduct.status,
      type: 'product',
      price: [{amount: newProduct.price, currency: 'USD', includes_tax: true}],
      meta: {stock: {availability: 'in-stock', level: newProduct.stock}}
    };

    let productId;
    let imageId;
    this._productService.createProduct(this.product)
      .flatMap(response => {
        productId = response.id;
        return this._productService.uploadImage(this.image);
      })
      .flatMap(response => {
        imageId = response['id'];
        return this._productService.addImageToProduct(productId, imageId);
      })
      .subscribe(response => {
        console.log(response);
      });
  }

  onFileChange(fileInput: any): void {
    this.image = fileInput.target.files[0];
    const reader = new FileReader();
    const preview = this._elementRef.nativeElement.querySelector('#preview');
    reader.onload = (evt: any) => {
      preview.src = evt.target.result;
    };
    reader.readAsDataURL(fileInput.target.files[0]);
  }
}
