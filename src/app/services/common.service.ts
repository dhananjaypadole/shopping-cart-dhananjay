import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  assetsFolderPath = '../../../assets';
  assetsFolderProductPath = '../../assets';
  // assetsFolderPath = 'http://localhost:6006';

  categoriesApi = 'http://localhost:6002/categories';
  bannerApi = 'http://localhost:6001/banner';
  productsApi = 'http://localhost:6004/products';
  cartApi = 'http://localhost:6003/cart';
  userApi = 'http://localhost:6005/users';

  constructor() { }
}
