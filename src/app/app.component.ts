import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { NgIf } from '@angular/common'; // Importa NgIf
import { AceptarComponent } from './Components/botones/aceptar/aceptar.component';
import { CancelarComponent } from './Components/botones/cancelar/cancelar.component';
import { OscuroComponent } from './Components/botones/oscuro/oscuro.component';
import { ClicksComponent } from './Components/botones/clicks/clicks.component';
import { DeshabilitarComponent } from './Components/botones/deshabilitar/deshabilitar.component';
import { ContraComponent } from './Components/inputs/contra/contra.component';
import { MailComponent } from './Components/inputs/mail/mail.component';
import { TextoComponent } from './Components/inputs/texto/texto.component';
import { VisualisadorComponent } from './Components/visualisador/visualisador.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NgIf, 
    AceptarComponent,
    CancelarComponent,
    OscuroComponent,
    ClicksComponent,
    DeshabilitarComponent,
    ContraComponent,
    MailComponent,
    TextoComponent,
    VisualisadorComponent
  ],  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  schemas: [NO_ERRORS_SCHEMA]  
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  email: string = '';
  password: string = '';
  text: string = '';
  clickCount: number = 0;
  isClickButtonDisabled: boolean = false;
  emailValid: string = '';
  passwordValid: string = '';
  isDarkMode: boolean = false;
  errorMessage: string = '';

  onAccept() {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;//condicion para verificar
    if (emailPattern.test(this.email)) {
      this.emailValid = 'Email válido';
      this.errorMessage = ''; // Limpia el mensaje de error
    } else {
      this.emailValid = '';
      this.errorMessage = 'Por favor, introduce un email válido.'; // Mensaje de error
    }
  }

  onCancel() {
    this.email = '';
    this.password = '';
    this.text = '';
    this.clickCount = 0;
    this.emailValid = '';
    this.passwordValid = '';
  this.errorMessage = '';
  }

  onToggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    if (this.isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }

  onCountClick() {
    if (!this.isClickButtonDisabled) {
      this.clickCount++;
    }
  }

  onDisableClickButton() {
    this.isClickButtonDisabled = !this.isClickButtonDisabled;
  }

  onEmailChange(newEmail: string) {
    this.email = newEmail;
  }

  onPasswordChange(newPassword: string) {
    this.password = newPassword;
  }

  onTextChange(newText: string) {
    this.text = newText;
  }
}
