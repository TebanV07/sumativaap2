import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-texto',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './texto.component.html',
  styleUrls: ['./texto.component.css']
})
export class TextoComponent {
  text: string = '';
  @Output() textChange = new EventEmitter<string>();

  onTextChange() {
    this.textChange.emit(this.text);
  }
}
