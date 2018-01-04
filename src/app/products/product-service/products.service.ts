import {Injectable} from '@angular/core';
import {ApiService} from '../../shared/service/api/api.service';
import {Observable} from 'rxjs/Rx';
import {IProduct} from '../product';

@Injectable()
export class ProductsService {

  constructor(private _apiService: ApiService) { }

  getProducts(): Observable<IProduct[]> {
    return this._apiService.get('v2/products/').map(response => response['data']);
  }

  getImageSource(id: string): Observable<string> {
    return this._apiService.get(`v2/files/${id}`).map(response => response['data']['link'].href);
  }

  getProduct(id: string): Observable<IProduct> {
    return this._apiService.get(`v2/products/${id}`).map(response => response['data']);
  }

  createProduct(product: IProduct): Observable<IProduct> {
    return this._apiService.post(`v2/products`, {data : product}).map(response => response['data']);
  }

  uploadImage(image: File): Observable<object> {
    const formData = new FormData();
    formData.append('file', image, image.name);
    formData.append('public', 'true');
    return this._apiService.postFile(`v2/files`, formData).map(response => response['data']);
  }

  addImageToProduct(productId: string, imageId: string): Observable<object> {
    const fileData = {data : {
                                type: 'main_image',
                                id: imageId
                             }
                     };
    return this._apiService.post(`v2/products/${productId}/relationships/main-image`, fileData).map(response => response['data']);
  }

}
