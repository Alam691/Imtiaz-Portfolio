import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-portfolio';

  sendToWhatsApp(event: Event) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const name = (form.querySelector('input[type="text"]') as HTMLInputElement).value;
    const email = (form.querySelector('input[type="email"]') as HTMLInputElement).value;
    const message = (form.querySelector('textarea') as HTMLTextAreaElement).value;

    if (!name || !message) {
      alert('Please fill in your name and message.');
      return;
    }

    const phone = "919599143721";
    const text = encodeURIComponent(
      `Hello Imtiaz,\n\n` +
      `*Name:* ${name}\n` +
      `*Email:* ${email}\n\n` +
      `*Message:* ${message}`
    );

    window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
  }
}
