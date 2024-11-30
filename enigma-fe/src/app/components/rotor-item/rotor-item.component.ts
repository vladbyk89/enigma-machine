import { Component, EventEmitter, Input, Output } from '@angular/core';
import RotorInterface from '../../helpers/Rotor/Model/RotorInterface';

@Component({
  selector: 'app-rotor-item',
  standalone: true,
  imports: [],
  templateUrl: './rotor-item.component.html',
  styleUrl: './rotor-item.component.scss',
})
export class RotorItemComponent {
  @Input() rotor: RotorInterface = {} as RotorInterface;
  @Output() onRotateTask: EventEmitter<RotorInterface> = new EventEmitter();

  constructor() {}

  onRotate(rotor: RotorInterface) {
    this.onRotateTask.emit(rotor);
  }
}
