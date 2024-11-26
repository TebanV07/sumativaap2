import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-mail',
  standalone: true,
  imports:[FormsModule],
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})
export class MailComponent {
  email: string = '';
  @Output() emailChange = new EventEmitter<string>();

  onEmailChange() {
    this.emailChange.emit(this.email);
  }
}
