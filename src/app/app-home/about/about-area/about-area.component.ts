import { Component } from '@angular/core';
import { IProducts } from '../../../../../entities/models/interfaces';
import { ProductServiceService } from '../../../../../services/product-service.service';
import { ProductCategory, ProductType } from '../../../../../entities/enums/product';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-about-area',
  templateUrl: './about-area.component.html',
  styleUrl: './about-area.component.scss'
})
export class AboutAreaComponent {
  selectedProduct: any = {
    imgUrl: '',
    name: '',
    price: 0,
    category: ProductCategory.Electronics,
    type: ProductType.Laptop,
    productId: 0,
    title: '',
    description: '',
    favourite: false
  };
  productId: number = 0;
  products: IProducts[] = [];

  constructor(public productService: ProductServiceService, private route: ActivatedRoute, private router: Router, private _snackBar: MatSnackBar) {
    this.productId = Number(this.route.snapshot.queryParams['productId'])
   }

  ngOnInit(): void {
    this.getProductData();   
  }

  getProductData(): void {
    this.productService.getProducts().then(products => {
      this.products = products;
      this.selectedProduct = structuredClone(this.products).find(product => product.productId === this.productId);
    }, err => {
      alert(err.message);
    });
  }


  goToProducts(): void {
    this.router.navigate(['home/products']);
  }

  addToCart(): void {
    this._snackBar.open('Item added to the cart!', '', {
      duration: 4000,
    });

  }
}
