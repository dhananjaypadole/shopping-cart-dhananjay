import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { ProductDataService } from 'src/app/services/product-data.service';


@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.scss']
})
export class ProductListingComponent implements OnInit {

  assetsPath: any;
  products: any = [];

  constructor(private commonService: CommonService, private productDataService: ProductDataService) { }

  ngOnInit(): void {
    this.assetsPath = this.commonService.assetsFolderPath;
    this.getData();
    console.log(this.assetsPath);
  }

  getData() {
    this.productDataService.getData(this.commonService.productsApi).subscribe((res) => {
      this.products = res;
      // this.products = this.products.filter((a: any) => {
      //   console.log(a);
      //   return a.order > 0
      // })
      // this.sortProduct();
      console.log(this.products);
    });
  }

  sortProduct() {
    
    console.log(this.products);
  }

}
