import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductCategory, ProductType } from '../../../../core/entities/enums/product';
import { IProducts } from '../../../../core/entities/models/interfaces';
import { ProductServiceService } from '../../../../core/services/product/product-service.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss',
  providers: [ProductServiceService]
})
export class ProductDetailComponent {
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
    this.productId = Number(this.route.snapshot.params['productId'])
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
