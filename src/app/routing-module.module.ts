import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { CategoryDetailsComponent } from "./category-details/category-details.component";
import { TopOffersComponent } from "./top-offers/top-offers.component";
import { CategoriesComponent } from "./categories/categories.component";
import { StoresComponent } from "./stores/stores.component";
import { StoreDetailsComponent } from "./store-details/store-details.component";

const routes : Routes=[
  {path : 'categories', component : CategoriesComponent},
  {path : 'categories/:id', component : CategoryDetailsComponent},
  {path : 'stores', component : StoresComponent},
  {path : 'stores/:id', component : StoreDetailsComponent},

  { path : '', redirectTo:'/dashboard', pathMatch:'full'},
  {path : 'dashboard', component:TopOffersComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports : [RouterModule],
})
export class RoutingModuleModule { }
