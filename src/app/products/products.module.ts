import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductCrudComponent} from './product-crud/product-crud.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import {RouterModule} from '@angular/router';
import {ProductsService} from './product-service/products.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    ProductListComponent,
    ProductCrudComponent,
    ProductDetailComponent
  ],
  exports: [
    ProductListComponent,
    ProductCrudComponent,
    ProductDetailComponent
  ],
  providers: [
    ProductsService
  ]
})
export class ProductsModule { }
