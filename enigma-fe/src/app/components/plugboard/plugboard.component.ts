import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface PlugboardKey {
  key: string;
  color: string;
}
@Component({
  selector: 'app-plugboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './plugboard.component.html',
  styleUrl: './plugboard.component.scss',
})
export class PlugboardComponent {
  @Input() plugboardRows: PlugboardKey[][] = [[]];
}
