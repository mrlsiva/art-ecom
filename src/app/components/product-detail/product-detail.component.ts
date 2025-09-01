import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-product-detail',
    templateUrl: './product-detail.component.html',
    standalone: true,
    imports: [CommonModule],
})
export class ProductDetailComponent implements OnInit {
    product: Product | undefined;

    constructor(private route: ActivatedRoute, private productService: ProductService) { }

    ngOnInit() {
        const id = this.route.snapshot.paramMap.get('id'); // keep as string
        if (id) {
            this.productService.getProducts().subscribe(data => {
                this.product = data.find(p => p.id === id);
            });
        }
    }
}
