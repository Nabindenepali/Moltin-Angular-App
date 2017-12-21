import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import {ProductsModule} from '../products/products.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ProductsModule
  ],
  declarations: [
    LoginComponent,
    DashboardComponent
  ],
  exports: [
    LoginComponent,
    DashboardComponent
  ]
})
export class UserModule { }
