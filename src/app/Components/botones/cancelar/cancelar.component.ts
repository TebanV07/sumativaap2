import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cancelar',
  standalone: true,
  imports:[FormsModule],
  templateUrl: './cancelar.component.html',
  styleUrls: ['./cancelar.component.css']
})
export class CancelarComponent {
  @Output() cancel = new EventEmitter<void>();

  onCancel() {
    this.cancel.emit();
  }
}
