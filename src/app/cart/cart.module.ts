import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartListComponent } from './cart-list/cart-list.component';
import { CardItemComponent } from './card-item/card-item.component';


@NgModule({
  declarations: [
    CartListComponent,
    CardItemComponent,
  ],
  imports: [
    CommonModule,
    CartRoutingModule,
  ]
})
export class CartModule { }
