import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactComponent {
  formData = { from_name: '', reply_to: '', message: '' };
  isSending = false;
  statusMessage = '';
  currentYear = new Date().getFullYear();

  async sendEmail(form: NgForm) {
    if (form.invalid) {
      this.statusMessage = '⚠️ Please fill all required fields correctly.';
      Object.values(form.controls).forEach(control => control.markAsTouched());
      return;
    }

    this.isSending = true;
    this.statusMessage = '';

    try {
      await emailjs.send('service_egl152q', 'template_1v2ofzf', this.formData, 'AF2pBSf_HB9jsO0bW');
      this.statusMessage = '✅ Message sent successfully!';
      form.resetForm();
    } catch (error) {
      console.error('EmailJS Error:', error);
      this.statusMessage = '❌ Failed to send message. Please try again later.';
    } finally {
      this.isSending = false;
    }
  }
}
