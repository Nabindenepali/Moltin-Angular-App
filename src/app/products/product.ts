import {IPrice} from './price';

export interface IProduct {
  commodity_type: string;
  description: string;
  id?: string;
  imgSource?: string;
  manage_stock: boolean;
  meta?: object;
  name: string;
  price?: IPrice[];
  relationships?: object[];
  sku: string;
  slug: string;
  status: string;
  type?: string;
}









