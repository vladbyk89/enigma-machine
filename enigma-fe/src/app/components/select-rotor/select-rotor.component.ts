import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import StartPageFormData from '../../helpers/models/startPage-formData.model';
import { FormsModule } from '@angular/forms';
import WiringRequestDto from '../../helpers/models/wiring-request.model';

@Component({
  selector: 'app-select-rotor',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './select-rotor.component.html',
  styleUrl: './select-rotor.component.scss',
})
export class SelectRotorComponent implements OnInit {
  @Input() availableRotors: WiringRequestDto[] = [];
  @Input() formData: StartPageFormData = {} as StartPageFormData;
  @Input() rotorName: 'rightRotor' | 'middleRotor' | 'leftRotor' = 'rightRotor';
  @Input() rotorNumber: number = 0;

  ngOnInit(): void {}
}
