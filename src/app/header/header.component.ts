import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CartListComponent } from '../cart/cart-list/cart-list.component';
import { CommonService } from '../services/common.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  totalCartItem = 0;

  constructor(private modalService: NgbModal, public commonService: CommonService) { }

  ngOnInit(): void {
    this.commonService.totelItemSiseInCart.subscribe((res: any) => {
      this.totalCartItem = res;
    })

    let cartItem = localStorage.getItem('cartItem')
    if (cartItem) {
      this.commonService.cartItems = JSON.parse(cartItem);
      this.commonService.updateTotelitemInCart();
      this.commonService.updateTotalPrice();

    }
  }
  open() {
    this.commonService.openModel();
  }

}
