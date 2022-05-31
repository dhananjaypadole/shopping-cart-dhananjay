import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-sidebar-filter',
  templateUrl: './sidebar-filter.component.html',
  styleUrls: ['./sidebar-filter.component.scss']
})
export class SidebarFilterComponent implements OnInit {

  // assetsPath: any;
  categories: any = [];

  constructor(private commonService: CommonService, private dataService: DataService) { }

  ngOnInit(): void {
    if (this.dataService.allcetegory.length == 0) {
      this.getData();
    } else {
      this.categories = this.dataService.allcetegory;
    }
    // this.assetsPath = this.commonService.assetsFolderPath;
    // this.getData();
  }

  getData() {
    this.dataService.getData(this.commonService.categoriesApi).subscribe((res) => {
      this.categories = res;
      console.log( this.categories)
      this.categories = this.categories.filter((a: any) => {
        return a.order > 0
      })
      this.sortProduct();
    });
  }

  sortProduct() {
    this.categories = this.categories.sort(function (a: any, b: any) {
      return a.order - b.order;
    });
  }
}