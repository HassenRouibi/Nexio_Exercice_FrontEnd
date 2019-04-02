import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from './app.component';
import { HttpModule } from "@angular/http";
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductService } from './shared_service/product.service'

const appRoutes:Routes = [
{ path:'', component: ProductsListComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
