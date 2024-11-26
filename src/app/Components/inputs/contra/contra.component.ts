import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf, NgFor } from '@angular/common'; // Importamos NgIf y NgFor

@Component({
  selector: 'app-contra',
  standalone: true,
  imports: [FormsModule, NgIf, NgFor], // Incluimos NgIf y NgFor en imports
  templateUrl: './contra.component.html',
  styleUrls: ['./contra.component.css']
})
export class ContraComponent {
  password: string = '';
  @Output() passwordChange = new EventEmitter<string>();
  passwordErrors: string[] = []; // Para almacenar los errores de validación

  onPasswordChange() {
    this.validatePassword();
    this.passwordChange.emit(this.password);
  }

  validatePassword() {
    const errors = [];
    if (this.password.length <= 5) {
      errors.push('La contraseña debe tener más de 5 caracteres.');
    }
    if (!/[A-Z]/.test(this.password)) {
      errors.push('La contraseña debe contener al menos una letra mayúscula.');
    }
    if (!/[a-z]/.test(this.password)) {
      errors.push('La contraseña debe contener al menos una letra minúscula.');
    }
    this.passwordErrors = errors;
  }
}
