import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { WrapperRestaurantsPageComponent } from './wrapper-restaurants-page/wrapper-restaurants-page.component';
import { LoginComponent } from './login/login.component';
import { BakeryComponent } from './bakery/bakery.component';
import { ThickShakesComponent } from './thickshakes/thickshakes.component';
import { DominosComponent } from './dominos/dominos.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import { CreamStoneComponent } from './cream-stone/cream-stone.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WrapperRestaurantsPageComponent,
    LoginComponent,
    BakeryComponent,
    ThickShakesComponent,
    DominosComponent,
    PageNotFoundComponent,
    AddToCartComponent,
    CreamStoneComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
