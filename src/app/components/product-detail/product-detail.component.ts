import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-product-detail',
    templateUrl: './product-detail.component.html',
    standalone: true,
    imports: [CommonModule, FormsModule, HttpClientModule],
})
export class ProductDetailComponent implements OnInit, OnDestroy {
    selectedAction: string = 'rent';
    product: Product | undefined;
    private routeSub: Subscription | undefined;

    // Popup logic
    isPopupOpen: boolean = false;
    successMessage: string = '';
    errorMessage: string = '';
    formData = {
        name: '',
        phone: '',
        email: '',
        productId: '',
        amount: ''
    };

    constructor(
        private route: ActivatedRoute,
        private productService: ProductService,
        private http: HttpClient // ✅ Inject HttpClient
    ) { }

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

    // Popup methods
    openPopup() {
        if (!this.product) return;
        this.formData.productId = this.product.id;
        this.formData.amount = this.selectedAction === 'rent' ? this.product.rent : this.product.buy;
        this.isPopupOpen = true;
    }

    closePopup() {
        this.isPopupOpen = false;
        this.clearMessages();
    }

    clearMessages() {
        this.successMessage = '';
        this.errorMessage = '';
    }

    submitForm() {
        if (!this.formData.name.trim() || !this.formData.phone.trim() || !this.formData.email.trim()) {
            alert("Please fill in Name, Phone, and Email before submitting.");
            return;
        }
        const payload = {
            name: this.formData.name,
            phone: this.formData.phone,
            email: this.formData.email,
            message: `Interested in ${this.selectedAction} for product ID ${this.formData.productId}, Amount: ${this.formData.amount}`
        };

        this.http.post('https://www.art.slinggroups.in/send-mail.php', payload)
            .subscribe({
                next: () => {
                    this.successMessage = "Message sent successfully!";
                    this.errorMessage = "";
                    // this.clearForm();
                    // this.closePopup();
                    // alert(this.successMessage);
                },
                error: () => {
                    this.errorMessage = "Failed to send message.";
                    this.successMessage = "";
                    // alert(this.errorMessage);
                }
            });
    }

    clearForm() {
        this.formData = {
            name: '',
            phone: '',
            email: '',
            productId: '',
            amount: ''
        };
    }
}
