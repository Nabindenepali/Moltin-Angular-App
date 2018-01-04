import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';

import {Moltin} from './app.component';

import {Config} from './config/config.service';
import {TokenService} from './shared/service/token/token.service';
import {HeaderComponent} from './shared/header/header.component';
import {FooterComponent} from './shared/footer/footer.component';
import {AuthService} from './shared/service/auth/auth.service';
import {ApiService} from './shared/service/api/api.service';
import {UserModule} from './user/user.module';
import {GlobalDataService} from './shared/service/globaldata/globaldata.service';
import {ProductsModule} from './products/products.module';
import {RouterModule} from '@angular/router';
import {DashboardComponent} from './user/dashboard/dashboard.component';
import {ProductDetailComponent} from './products/product-detail/product-detail.component';
import {ProductCrudComponent} from './products/product-crud/product-crud.component';
import {LoginComponent} from './user/login/login.component';

@NgModule({
  declarations: [
    Moltin,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    UserModule,
    ProductsModule,
    RouterModule.forRoot([
      { path: 'dashboard/product/new', component: ProductCrudComponent, pathMatch: 'full' },
      { path: 'dashboard/product/:id', component: ProductDetailComponent, pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent, pathMatch: 'full' },
      { path: '**', component: LoginComponent, pathMatch: 'full' }
      // { path: '**', component: LoginComponent, pathMatch: 'full', canActivate: [AuthGuardService] }
    ])
  ],
  providers: [
    Config,
    TokenService,
    AuthService,
    ApiService,
    GlobalDataService,
    // AuthGuardService
  ],
  bootstrap: [Moltin]
})
export class AppModule { }
