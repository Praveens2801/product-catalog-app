import { Injectable } from '@angular/core';
import { IProducts } from '../entities/models/interfaces';
import { ProductCategory, ProductType } from '../entities/enums/product';

@Injectable()
export class ProductServiceService {
  products: IProducts[] = [
    {
      imgUrl: "../assets/images/1.jpg",
      name: "Samsung",
      price: 20000,
      category: ProductCategory.Electronics,
      type: ProductType.Mobile,
      favourite: false,
      productId: 1,
      title: "Galaxy A15 5G Latest Smartphone",
      description: "A smartphone with all the latest features."
    },
    {
      imgUrl: "../assets/images/2.jpg",
      name: "Samsung",
      price: 28999,
      category: ProductCategory.Electronics,
      type: ProductType.Mobile,
      favourite: false,
      productId: 2,
      title: "Galaxy F55 5G Premium Smartphone",
      description: "Premium smartphone with advanced camera and performance."
    },
    {
      imgUrl: "../assets/images/3.jpg",
      name: "Samsung",
      price: 25699,
      category: ProductCategory.Electronics,
      type: ProductType.Mobile,
      favourite: false,
      productId: 3,
      title: "Galaxy S21 FE 5G Budget Smartphone",
      description: "Affordable smartphone with essential features."
    },
    {
      imgUrl: "../assets/images/4.jpg",
      name: "Samsung",
      price: 14550,
      category: ProductCategory.Electronics,
      type: ProductType.Mobile,
      favourite: false,
      productId: 4,
      title: "Galaxy A14 5g Flagship Smartphone",
      description: "Flagship smartphone with top-notch specifications."
    },
    {
      imgUrl: "../assets/images/5.jpg",
      name: "Samsung",
      price: 12399,
      category: ProductCategory.Electronics,
      type: ProductType.Mobile,
      favourite: false,
      productId: 5,
      title: "Galaxy A33 5G Mid-range Smartphone",
      description: "Balanced smartphone with good performance and features."
    },
    {
      imgUrl: "../assets/images/6.jpg",
      name: "HP",
      price: 38990,
      category: ProductCategory.Electronics,
      type: ProductType.Laptop,
      favourite: false,
      productId: 6,
      title: "15s Intel Core 12th Gen",
      description: "Ultra premium smartphone with cutting-edge technology."
    },
    {
      imgUrl: "../assets/images/7.jpg",
      name: "Lenovo",
      price: 18999,
      category: ProductCategory.Electronics,
      type: ProductType.Laptop,
      favourite: false,
      productId: 7,
      title: "Ideapad 3 Intel Intel Core Gen Ssd",
      description: "Compact smartphone for easy handling and portability."
    },
    {
      imgUrl: "../assets/images/8.jpg",
      name: "Dell",
      price: 36560,
      category: ProductCategory.Electronics,
      type: ProductType.Laptop,
      favourite: false,
      productId: 8,
      title: "Inspiron 15 Laptop",
      description: "Sleek and stylish smartphone with a modern design."
    },
    {
      imgUrl: "../assets/images/9.jpg",
      name: "Hp",
      price: 20999,
      category: ProductCategory.Electronics,
      type: ProductType.Laptop,
      favourite: false,
      productId: 9,
      title: "Chromebook X360 G5",
      description: "Compact smartphone for easy handling and portability."
    },
    {
      imgUrl: "../assets/images/10.jpg",
      name: "Ultimus",
      price: 16599,
      category: ProductCategory.Electronics,
      type: ProductType.Laptop,
      favourite: false,
      productId: 10,
      title: "Pro Intel Celeron Dual Core",
      description: "Sleek and stylish smartphone with a modern design."
    },
    {
      imgUrl: "../assets/images/11.jpg",
      name: "Fossil",
      price: 7497,
      category: ProductCategory.Fashion,
      type: ProductType.Watch,
      favourite: false,
      productId: 11,
      title: "Men Grant Sport Watch-FS5237",
      description: "A smartphone with all the latest features."
    },
    {
      imgUrl: "../assets/images/12.jpg",
      name: "Armani Exchange",
      price: 17495,
      category: ProductCategory.Fashion,
      type: ProductType.Watch,
      favourite: false,
      productId: 12,
      title: "Men Gold Watch AX1721",
      description: "Premium smartphone with advanced camera and performance."
    },
    {
      imgUrl: "../assets/images/13.jpg",
      name: "Casio",
      price: 2795,
      category: ProductCategory.Fashion,
      type: ProductType.Watch,
      favourite: false,
      productId: 13,
      title: "Enticer Men Analog Watch",
      description: "Affordable smartphone with essential features."
    },
    {
      imgUrl: "../assets/images/14.jpg",
      name: "Fossil",
      price: 13495,
      category: ProductCategory.Fashion,
      type: ProductType.Watch,
      favourite: false,
      productId: 14,
      title: "Men FS4656 Machine Watch",
      description: "Flagship smartphone with top-notch specifications."
    },
    {
      imgUrl: "../assets/images/15.jpg",
      name: "Titan",
      price: 2500,
      category: ProductCategory.Fashion,
      type: ProductType.Watch,
      favourite: false,
      productId: 15,
      title: "Men NN1639SM02 Analog Watch",
      description: "Balanced smartphone with good performance and features."
    },
    {
      imgUrl: "../assets/images/16.jpg",
      name: "Nike",
      price: 1099.99,
      category: ProductCategory.Footwear,
      type: ProductType.Shoes,
      favourite: false,
      productId: 16,
      title: "Dunk Low Older Kids' Shoes",
      description: "Ultra premium smartphone with cutting-edge technology."
    },
    {
      imgUrl: "../assets/images/17.jpg",
      name: "Nike",
      price: 5400,
      category: ProductCategory.Footwear,
      type: ProductType.Shoes,
      favourite: false,
      productId: 17,
      title: "Men Scorch Running Shoes",
      description: "Compact smartphone for easy handling and portability."
    },
    {
      imgUrl: "../assets/images/18.jpg",
      name: "Nike",
      price: 6990,
      category: ProductCategory.Footwear,
      type: ProductType.Shoes,
      favourite: false,
      productId: 18,
      title: "Woven-Design Sports Running Shoes",
      description: "Sleek and stylish smartphone with a modern design."
    },
    {
      imgUrl: "../assets/images/19.jpg",
      name: "Ascis",
      price: 7495,
      category: ProductCategory.Footwear,
      type: ProductType.Shoes,
      favourite: false,
      productId: 19,
      title: "Cortez Men's Shoes",
      description: "Compact smartphone for easy handling and portability."
    },
    {
      imgUrl: "../assets/images/20.jpg",
      name: "Van Heusen",
      price: 3009,
      category: ProductCategory.Footwear,
      type: ProductType.Shoes,
      favourite: false,
      productId: 20,
      title: "Men Textured Leather Formal Derbys",
      description: "Sleek and stylish smartphone with a modern design."
    }
  ];

  constructor() { }

  getProducts(): Promise<IProducts[]> {
    return new Promise<IProducts[]>((resolve, reject) => {
      if (this.products.length > 0) {
        resolve(this.products);
      } else {
        reject('No products found');
      }
    });
  }
}
