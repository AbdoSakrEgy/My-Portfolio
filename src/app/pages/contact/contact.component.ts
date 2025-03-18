import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { bootstrapTelephoneFill } from '@ng-icons/bootstrap-icons';
import { simpleGmail, simpleGooglemaps } from '@ng-icons/simple-icons';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [NgIcon, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
  viewProviders: [
    provideIcons({ bootstrapTelephoneFill, simpleGmail, simpleGooglemaps }),
  ],
})
export class ContactComponent {
  contactForm = new FormGroup({
    user_name: new FormControl('', [Validators.required]),
    user_email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', [Validators.required]),
  });

  public sendEmail(e: Event) {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_liixjez',
        'template_xk75z1a',
        e.target as HTMLFormElement,
        {
          publicKey: 'U3EaDKEsaUAFsBpLL',
        }
      )
      .then(
        () => {
          console.log('SUCCESS!');
          this.contactForm.reset();
        },
        (error) => {
          console.log('FAILED...', (error as EmailJSResponseStatus).text);
          this.contactForm.reset();
        }
      );
  }
}
