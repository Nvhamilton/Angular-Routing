import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';//imported for tutorial 

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ProductData } from './products/product-data';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { PageNotFoundComponent } from './page-not-found.component';

/* Feature Modules */
import { ProductModule } from './products/product.module';
import { UserModule } from './user/user.module';
import { MessageModule } from './messages/message.module';

@NgModule({
  imports: [
    BrowserModule,//basic directives like ngIf and ngFor/
    HttpClientModule,//basic http directives
    InMemoryWebApiModule.forRoot(ProductData, { delay: 1000 }),//simulates APi calls
    ProductModule,//feature module
    UserModule,//feature module
    MessageModule,//feature module
    RouterModule.forRoot([
      {path: 'welcome', component:WelcomeComponent},
      {path:'', redirectTo:'welcome', pathMatch:'full'},//blank paths redirects to the welcome route, full path match
      {path:'**', component:PageNotFoundComponent}
    ])//modules get imported so the app may recognize it's existence..takes an array of objects
  ],
  declarations: [
    AppComponent,
    WelcomeComponent,
    PageNotFoundComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
