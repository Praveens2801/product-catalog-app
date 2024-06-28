import { Injectable } from '@angular/core';
import { IProducts } from '../entities/models/interfaces';

@Injectable()
export class ProductServiceService {
  products: IProducts[] = [
    {
      imgUrl: "../assets/images/1.jpg",
      name: "Smartphone",
      price: 699.99,
      category: "Electronics",
      id: 1,
      title: "Latest Smartphone",
      description: "A smartphone with all the latest features."
    },
    {
      imgUrl: "../assets/images/2.jpg",
      name: "Smartphone",
      price: 799.99,
      category: "Electronics",
      id: 2,
      title: "Premium Smartphone",
      description: "Premium smartphone with advanced camera and performance."
    },
    {
      imgUrl: "../assets/images/3.jpg",
      name: "Smartphone",
      price: 499.99,
      category: "Electronics",
      id: 3,
      title: "Budget Smartphone",
      description: "Affordable smartphone with essential features."
    },
    {
      imgUrl: "../assets/images/4.jpg",
      name: "Smartphone",
      price: 899.99,
      category: "Electronics",
      id: 4,
      title: "Flagship Smartphone",
      description: "Flagship smartphone with top-notch specifications."
    },
    {
      imgUrl: "../assets/images/5.jpg",
      name: "Smartphone",
      price: 599.99,
      category: "Electronics",
      id: 5,
      title: "Mid-range Smartphone",
      description: "Balanced smartphone with good performance and features."
    },
    {
      imgUrl: "../assets/images/6.jpg",
      name: "Smartphone",
      price: 1099.99,
      category: "Electronics",
      id: 6,
      title: "Ultra Premium Smartphone",
      description: "Ultra premium smartphone with cutting-edge technology."
    },
    {
      imgUrl: "../assets/images/7.jpg",
      name: "Smartphone",
      price: 349.99,
      category: "Electronics",
      id: 7,
      title: "Compact Smartphone",
      description: "Compact smartphone for easy handling and portability."
    },
    {
      imgUrl: "../assets/images/8.jpg",
      name: "Smartphone",
      price: 449.99,
      category: "Electronics",
      id: 8,
      title: "Sleek Smartphone",
      description: "Sleek and stylish smartphone with a modern design."
    },
    {
      imgUrl: "../assets/images/9.jpg",
      name: "Smartphone",
      price: 349.99,
      category: "Electronics",
      id: 7,
      title: "Compact Smartphone",
      description: "Compact smartphone for easy handling and portability."
    },
    {
      imgUrl: "../assets/images/10.jpg",
      name: "Smartphone",
      price: 449.99,
      category: "Electronics",
      id: 8,
      title: "Sleek Smartphone",
      description: "Sleek and stylish smartphone with a modern design."
    },
    {
      imgUrl: "../assets/images/11.jpg",
      name: "Smartphone",
      price: 699.99,
      category: "Electronics",
      id: 1,
      title: "Latest Smartphone",
      description: "A smartphone with all the latest features."
    },
    {
      imgUrl: "../assets/images/12.jpg",
      name: "Smartphone",
      price: 799.99,
      category: "Electronics",
      id: 2,
      title: "Premium Smartphone",
      description: "Premium smartphone with advanced camera and performance."
    },
    {
      imgUrl: "../assets/images/13.jpg",
      name: "Smartphone",
      price: 499.99,
      category: "Electronics",
      id: 3,
      title: "Budget Smartphone",
      description: "Affordable smartphone with essential features."
    },
    {
      imgUrl: "../assets/images/14.jpg",
      name: "Smartphone",
      price: 899.99,
      category: "Electronics",
      id: 4,
      title: "Flagship Smartphone",
      description: "Flagship smartphone with top-notch specifications."
    },
    {
      imgUrl: "../assets/images/15.jpg",
      name: "Smartphone",
      price: 599.99,
      category: "Electronics",
      id: 5,
      title: "Mid-range Smartphone",
      description: "Balanced smartphone with good performance and features."
    },
    {
      imgUrl: "../assets/images/16.jpg",
      name: "Smartphone",
      price: 1099.99,
      category: "Electronics",
      id: 6,
      title: "Ultra Premium Smartphone",
      description: "Ultra premium smartphone with cutting-edge technology."
    },
    {
      imgUrl: "../assets/images/17.jpg",
      name: "Smartphone",
      price: 349.99,
      category: "Electronics",
      id: 7,
      title: "Compact Smartphone",
      description: "Compact smartphone for easy handling and portability."
    },
    {
      imgUrl: "../assets/images/18.jpg",
      name: "Smartphone",
      price: 449.99,
      category: "Electronics",
      id: 8,
      title: "Sleek Smartphone",
      description: "Sleek and stylish smartphone with a modern design."
    },
    {
      imgUrl: "../assets/images/19.jpg",
      name: "Smartphone",
      price: 349.99,
      category: "Electronics",
      id: 7,
      title: "Compact Smartphone",
      description: "Compact smartphone for easy handling and portability."
    },
    {
      imgUrl: "../assets/images/20.jpg",
      name: "Smartphone",
      price: 449.99,
      category: "Electronics",
      id: 8,
      title: "Sleek Smartphone",
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
