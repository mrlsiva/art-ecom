import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-contact',
    standalone: true,
    imports: [CommonModule, FormsModule, HttpClientModule],
    templateUrl: './contact.component.html'
})
export class ContactComponent {
    name: string = '';
    email: string = '';
    phone: string = '';
    message: string = '';
    successMessage: string = '';
    errorMessage: string = '';

    constructor(private http: HttpClient) { }

    sendMessage() {
        const payload = {
            name: this.name,
            email: this.email,
            phone: this.phone,
            message: this.message
        };

        this.http.post('https://www.art.slinggroups.in/send-mail.php', payload)
            .subscribe({
                next: () => {
                    this.successMessage = "Message sent successfully!";
                    this.errorMessage = "";
                    this.name = '';
                    this.email = '';
                    this.phone = '';
                    this.message = '';
                },
                error: () => {
                    this.errorMessage = "Failed to send message.";
                    this.successMessage = "";
                }
            });
    }
}
