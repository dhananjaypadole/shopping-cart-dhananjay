import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsListComponent } from './products-list/products-list.component';
import { SidebarFilterComponent } from './products-list/sidebar-filter/sidebar-filter.component';


@NgModule({
  declarations: [
    ProductsListComponent,
    SidebarFilterComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
