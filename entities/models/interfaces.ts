import { ProductCategory, ProductType } from "../enums/product";

export interface IProducts {
    imgUrl: string;
    name: string;
    price: number;
    category: ProductCategory;
    type: ProductType;
    productId: number;
    title: string;
    description: string;
    favourite: boolean;
  }

  export interface IkeyValuePair {
    key: number;
    value: string;
  }