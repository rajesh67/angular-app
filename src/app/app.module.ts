import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { RoutingModuleModule } from './/routing-module.module';
import { TopOffersComponent } from './top-offers/top-offers.component';
import { CategoriesComponent } from './categories/categories.component';
import { FooterComponent } from './footer/footer.component';
import { CategoryDetailsComponent } from './category-details/category-details.component';
import { StoresComponent } from './stores/stores.component';
import { StoreDetailsComponent } from './store-details/store-details.component';

library.add(fas,far,fab);

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    TopOffersComponent,
    CategoriesComponent,
    FooterComponent,
    CategoryDetailsComponent,
    StoresComponent,
    StoreDetailsComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    RoutingModuleModule,
    FontAwesomeModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
