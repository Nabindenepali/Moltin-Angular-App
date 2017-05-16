import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {AuthService} from './service/auth/auth.service';




import { Moltin } from './app.component';

@NgModule({
  declarations: [
      Moltin
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
      AuthService
  ],
  bootstrap: [Moltin]
})
export class AppModule { }
