import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [CommonModule, RouterLink, FormsModule, HttpClientModule],
    templateUrl: './header.component.html'
})
export class HeaderComponent {
    isPopupOpen: boolean = false;

    formData = {
        name: '',
        phone: '',
        email: '',
        productId: ''
    };

    successMessage: string = '';
    errorMessage: string = '';

    constructor(private http: HttpClient) { }

    openPopup() {
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
        const payload = {
            name: this.formData.name,
            phone: this.formData.phone,
            email: this.formData.email,
            message: this.formData.productId
        };

        this.http.post('https://www.art.slinggroups.in/send-mail.php', payload)
            .subscribe({
                next: () => {
                    this.successMessage = "Message sent successfully!";
                    this.errorMessage = "";
                    this.formData = {
                        name: '',
                        phone: '',
                        email: '',
                        productId: ''
                    };
                    this.closePopup();
                    alert(this.successMessage);
                },
                error: () => {
                    this.errorMessage = "Failed to send message.";
                    this.successMessage = "";
                    alert(this.errorMessage);
                }
            });
    }
}
