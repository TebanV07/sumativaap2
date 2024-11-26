import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-clicks',
  standalone: true,
  imports:[FormsModule],
  templateUrl: './clicks.component.html',
  styleUrls: ['./clicks.component.css']
})
export class ClicksComponent {
  @Output() countClick = new EventEmitter<void>();

  onCountClick() {
    this.countClick.emit();
  }
}
