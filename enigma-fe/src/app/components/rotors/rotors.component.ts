import { Component, OnInit } from '@angular/core';
import { RotorItemComponent } from '../rotor-item/rotor-item.component';
import RotorInterface from '../../helpers/Rotor/Model/RotorInterface';
import { CommonModule } from '@angular/common';
import { EnigmaTasksService } from '../../helpers/EnigmaMachine/services/enigma-tasks.service';

@Component({
  selector: 'app-rotors',
  standalone: true,
  imports: [RotorItemComponent, CommonModule],
  templateUrl: './rotors.component.html',
  styleUrl: './rotors.component.scss',
})
export class RotorsComponent implements OnInit {
  rotors: RotorInterface[] = [];

  constructor(private enigmaConfigService: EnigmaTasksService) {}

  rotate(rotor: RotorInterface) {
    rotor.position = (rotor.position + 1) % 26;
  }

  ngOnInit(): void {
    this.rotors = this.enigmaConfigService.getMachineSetup().Rotors;
  }
}
