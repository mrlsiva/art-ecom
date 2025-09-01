import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';

@Component({
    selector: 'app-product-list',
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: './product-list.component.html'
})
export class ProductListComponent {
    products: Product[] = [];

    constructor(private productService: ProductService) { }

    ngOnInit() {
        this.productService.getProducts().subscribe(data => this.products = data);
    }
}
