import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WrapperRestaurantsPageComponent } from './wrapper-restaurants-page/wrapper-restaurants-page.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { BakeryComponent } from './bakery/bakery.component';
import { DominosComponent } from './dominos/dominos.component';
import { ThickShakesComponent } from './thickshakes/thickshakes.component';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import { CreamStoneComponent } from './cream-stone/cream-stone.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'restaurant',
    component: WrapperRestaurantsPageComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      { path: 'dominos', component: DominosComponent },
      { path: 'bakery', component: BakeryComponent },
      { path: 'thickshakes', component: ThickShakesComponent },
      { path: 'addtocart', component: AddToCartComponent },
      { path: 'creamstone', component: CreamStoneComponent },
    ],
  },
  { path: 'not-found', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
