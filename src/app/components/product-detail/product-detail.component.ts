import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-product-detail',
    templateUrl: './product-detail.component.html',
    standalone: true,
    imports: [CommonModule],
})
export class ProductDetailComponent implements OnInit, OnDestroy {
    product: Product | undefined;
    private routeSub: Subscription | undefined;

    constructor(private route: ActivatedRoute, private productService: ProductService) { }

    ngOnInit() {
        this.routeSub = this.route.paramMap.subscribe(params => {
            const id = params.get('id');
            if (id) {
                this.loadProduct(id);
            }
        });
    }

    loadProduct(id: string) {
        this.productService.getProducts().subscribe({
            next: data => {
                this.product = data.find(p => p.id === id);
            },
            error: err => {
                console.error('Error loading products:', err);
            }
        });
    }

    ngOnDestroy() {
        if (this.routeSub) {
            this.routeSub.unsubscribe();
        }
    }
}
