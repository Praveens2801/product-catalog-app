import { Component } from '@angular/core';
import { IProducts } from '../../../../../entities/models/interfaces';
import { ProductServiceService } from '../../../../../services/product-service.service';

@Component({
  selector: 'app-product-area',
  templateUrl: './product-area.component.html',
  styleUrl: './product-area.component.scss'
})
export class ProductAreaComponent {
  products: IProducts[] = [];
  filteredProductsData: IProducts[] = [];
  searchTerm: string = '';

  constructor(private service: ProductServiceService) { }

  ngOnInit(): void {
    this.getProductData();
  }

  getProductData(): void {
    this.service.getProducts().then(products => {
      this.products = this.filteredProductsData = products;
    }, err => {
      alert(err.message);
    });
  }

  searchProduct(searchTerm: string): void {
      this.filteredProductsData = structuredClone(this.products).filter(product => product.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()));
  }
}
