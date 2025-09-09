import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';

@Component({
    selector: 'app-product-list',
    standalone: true,
    imports: [CommonModule, RouterModule, FormsModule],
    templateUrl: './product-list.component.html'
})
export class ProductListComponent {
    products: Product[] = [];
    searchTerm: string = '';
    selectedCategory: string = 'All'; // ✅ Category filter with default 'All'

    constructor(private productService: ProductService) { }

    ngOnInit() {
        this.productService.getProducts().subscribe(data => this.products = data);
    }

    // ✅ Get unique categories including 'All'
    get categories(): string[] {
        const categories = this.products.map(p => p.category).filter(Boolean);
        return ['All', ...Array.from(new Set(categories))];
    }

    // ✅ Filtered products based on search term and category
    get filteredProducts(): Product[] {
        let result = this.products;

        // Filter by category if not 'All'
        if (this.selectedCategory !== 'All') {
            result = result.filter(product => product.category === this.selectedCategory);
        }

        // Filter by search term
        if (this.searchTerm.trim()) {
            const lowerSearch = this.searchTerm.toLowerCase();
            result = result.filter(product => {
                return (
                    (product.name && product.name.toLowerCase().includes(lowerSearch)) ||
                    (product.category && product.category.toLowerCase().includes(lowerSearch)) ||
                    (product.artist && product.artist.toLowerCase().includes(lowerSearch)) ||
                    (product.rent && product.rent.toString().toLowerCase().includes(lowerSearch)) ||
                    (product.buy && product.buy.toString().toLowerCase().includes(lowerSearch))
                );
            });
        }

        return result;
    }
}
