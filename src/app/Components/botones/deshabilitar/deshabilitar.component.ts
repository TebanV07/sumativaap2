import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-deshabilitar',
  standalone: true,
  imports:[FormsModule],
  templateUrl: './deshabilitar.component.html',
  styleUrls: ['./deshabilitar.component.css']
})
export class DeshabilitarComponent {
  
  @Output() disableClickButton = new EventEmitter<void>();

  onDisableClickButton() {
    this.disableClickButton.emit();
  }
}
