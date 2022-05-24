import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListingComponent } from './product-listing/product-listing.component';

const routes: Routes = [
  {
    path: 'products',
    loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)
  },
  {
    path:'cart',
    loadChildren:()=> import('./cart/cart.module').then(m => m.CartModule) 
  },
  {
    path:'',
    loadChildren:()=> import('./auth/auth.module').then(m => m.AuthModule) 
  },
  {
    path:'product-listing', component: ProductListingComponent,
  },

  {
    path:'home',
    loadChildren:()=> import('./home/home.module').then(m => m.HomeModule) 
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
