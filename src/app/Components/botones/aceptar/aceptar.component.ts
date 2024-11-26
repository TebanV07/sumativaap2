import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-aceptar',
  standalone: true,
  imports:[FormsModule],
  templateUrl: './aceptar.component.html',
  styleUrls: ['./aceptar.component.css']
})
export class AceptarComponent {
  @Output() accept = new EventEmitter<void>();

  onAccept() {
    this.accept.emit();
  }
}
