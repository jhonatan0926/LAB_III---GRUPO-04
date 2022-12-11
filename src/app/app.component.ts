import {Component} from '@angular/core';
import { ProductService } from './productservice';
import { Product } from './product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent { 
    products: Product[];

    constructor(private productService: ProductService) { }

    ngOnInit() {
        this.productService.getProductsSmall().then(data => this.products = data);
    }
}
