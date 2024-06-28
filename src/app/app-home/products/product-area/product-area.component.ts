import { Component } from '@angular/core';
import { IProducts, IkeyValuePair } from '../../../../../entities/models/interfaces';
import { ProductServiceService } from '../../../../../services/product-service.service';
import { PriceSortOrder, ProductCategory } from '../../../../../entities/enums/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-area',
  templateUrl: './product-area.component.html',
  styleUrl: './product-area.component.scss'
})
export class ProductAreaComponent {
  /* arrays */
  products: IProducts[] = [];
  filteredProductsData: IProducts[] = [];
  categories: IkeyValuePair[] = [];


  /* strings */
  searchTerm: string = '';
  selectedCategory: string = '';

  /* object */
  priceSortOrder = PriceSortOrder;

  constructor(private productService: ProductServiceService, public router: Router) { }

  ngOnInit(): void {
    this.getProductData();
    this.categories = this.enumeratorConversion(ProductCategory);
  }

  getProductData(): void {
    this.productService.getProducts().then(products => {
      this.products = this.filteredProductsData = products;
    }, err => {
      alert(err.message);
    });
  }

  enumeratorConversion(enumObject: any): IkeyValuePair[] {
    let enumDatakeys = Object.keys(enumObject);
    let functionalEnumKeys = enumDatakeys.slice(0, enumDatakeys.length / 2);
    let functinalEnumValues = enumDatakeys.slice(enumDatakeys.length / 2);
    let arrayList: IkeyValuePair[] = [];
    functionalEnumKeys.forEach((data, index) => {
      arrayList.push({
        key: parseInt(functionalEnumKeys[index]),
        value: functinalEnumValues[index]
      })
    })
    return arrayList;
  }

  searchProduct(searchTerm: string): void {
    this.filteredProductsData = structuredClone(this.products).filter(product => product.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()));
  }

  filterProducts(): void {
    if (this.selectedCategory === 'All' || !this.selectedCategory) {
      this.filteredProductsData = structuredClone(this.products);      
    } else {
      this.filteredProductsData = structuredClone(this.products).filter(product => product.category === Number(this.selectedCategory));
    }
  }

  goBackToProducts(): void {
    this.filterProducts();
    this.searchTerm = '';
  }

  sortProducts(priceSortOrder: PriceSortOrder): void {
    this.filteredProductsData.sort((a, b) => {
      if (priceSortOrder === PriceSortOrder['From Lower']) {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });
  }

  navigate(routePath: string, productId: number): void {
    this.router.navigate(
      [routePath],
      { queryParams: { productId: productId } }
    );
  }
}
