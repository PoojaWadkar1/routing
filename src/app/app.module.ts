import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { MenuComponent } from './menu/menu.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { SelectComponent } from './select/select.component';
import { BuyComponent } from './buy/buy.component';
import { DeliverComponent } from './deliver/deliver.component';
import { ExpressComponent } from './express/express.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { SigninComponent } from './signin/signin.component';
import { RegistrationComponent } from './registration/registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductService } from './Services.ts/ProductService';
import { HttpService } from './Services.ts/http';
import { CreatepostComponent } from './createpost/createpost.component';
import{  HttpClientModule } from '@angular/common/http'
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServicesComponent,
    ContactUsComponent,
    MenuComponent,
    PagenotfoundComponent,
    SelectComponent,
    BuyComponent,
    DeliverComponent,
    ExpressComponent,
    ProductdetailsComponent,
    SigninComponent,
    RegistrationComponent,
    CreatepostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
