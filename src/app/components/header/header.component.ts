import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [CommonModule, RouterLink, FormsModule],
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

    openPopup() {
        this.isPopupOpen = true;
    }

    closePopup() {
        this.isPopupOpen = false;
    }

    submitForm() {
        console.log("Form Data:", this.formData);
        // You can handle the form submission here, e.g., send to server
        alert("Form submitted successfully!");
        this.closePopup();
    }
}
