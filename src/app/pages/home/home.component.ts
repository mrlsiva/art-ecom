
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HomeService, HomeData } from '../../services/home.service';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';
@Component({
    selector: 'app-home',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
    products: Product[] = [];
    homeData: HomeData | null = null;

    constructor(private productService: ProductService,
        private homeService: HomeService) { }
    ngOnInit() {
        this.productService.getProducts().subscribe(data => {
            this.products = data.filter(product => product.features === 1);
        });
        this.homeService.getHomeData().subscribe(data => {
            this.homeData = data;
        });
    }
}
