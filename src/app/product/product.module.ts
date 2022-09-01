import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRoutingModule } from './product-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgxSpinnerModule } from 'ngx-spinner';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoaderInterceptor } from '../loader/loader.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductCartComponent } from './product-cart/product-cart.component';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from '../search.pipe';
import { ToastrModule } from 'ngx-toastr';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ProductListComponent,
    ProductCartComponent,
    SearchPipe

  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
      BrowserModule,
      NgxSpinnerModule,
      BrowserAnimationsModule,
      FormsModule,
    ToastrModule.forRoot(),
    SharedModule
    
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }
  ],
})
export class ProductModule { }
