import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-visualisador',
  standalone: true,
  templateUrl: './visualisador.component.html',
  styleUrls: ['./visualisador.component.css']
})
export class VisualisadorComponent {
  @Input() email: string = '';
  @Input() password: string = '';
  @Input() text: string = '';
  @Input() clickCount: number = 0;
  @Input() isClickButtonDisabled: boolean = false;
}
