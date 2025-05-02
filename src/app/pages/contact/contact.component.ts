import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api'

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, ToastModule],
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  host: { 'id': crypto.getRandomValues(new Uint32Array(1))[0].toString() },
  providers: [MessageService]
})

export class ContactComponent {
  controlFormFields = {
    name: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    message: new FormControl(''),
    subject: new FormControl('')
  }

  contactForm = new FormGroup(this.controlFormFields);

  constructor(private messageService: MessageService) {}

  isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  isValidPhone(phone: string): boolean {
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(phone);
  }

  onSubmit() {
    if (this.contactForm.value.email && !this.isValidEmail(this.contactForm.value.email)) {
      this.messageService.add({ severity:'error', summary: 'Error', detail: 'Invalid email address' });
      return;
    }

    if (this.contactForm.value.phone && !this.isValidPhone(this.contactForm.value.phone)) {
      this.messageService.add({ severity:'error', summary: 'Error', detail: 'Invalid phone number' });
      return;
    }

    this.messageService.add({ severity: 'secondary', summary: 'Secondary', detail: 'Message sent with success' });
  }
}
