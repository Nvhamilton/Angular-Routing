import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { WelcomeComponent } from './home/welcome.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { ProductDetailComponent } from './products/product-detail.component';
import { ProductEditComponent } from './products/product-edit/product-edit.component';

const ROUTES = [
  { path: 'welcome', component: WelcomeComponent },
  { path: '', redirectTo: 'welcome', pathMatch: 'full' }, //blank paths redirects to the welcome route, full path match
  { path: '**', component: PageNotFoundComponent },
  { path: 'products/:id/edit', component: ProductDetailComponent },
  { path: 'products/:id/', component: ProductEditComponent },

];

@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES), //modules get imported so the app may recognize it's existence..takes an array of objects
  ],
  exports: [RouterModule], //angular modules can only be declared once.  We must export it here in order to access it within our root module
})
export class AppRoutingModule {}
