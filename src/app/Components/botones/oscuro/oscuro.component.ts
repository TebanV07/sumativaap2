import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-oscuro',
  standalone: true,
  imports:[FormsModule],
  templateUrl: './oscuro.component.html',
  styleUrls: ['./oscuro.component.css']
})
export class OscuroComponent {
  @Output() toggleDarkMode = new EventEmitter<void>();

  onToggleDarkMode() {
    this.toggleDarkMode.emit();
  }
}
