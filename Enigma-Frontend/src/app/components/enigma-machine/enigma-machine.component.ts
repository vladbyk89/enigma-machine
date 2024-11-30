import { Component } from '@angular/core';
import { RotorsComponent } from '../rotors/rotors.component';
import { KeyboardComponent } from '../keyboard/keyboard.component';
import { LampBoardComponent } from '../lamp-board/lamp-board.component';
import {
  PlugboardComponent,
  PlugboardKey,
} from '../plugboard/plugboard.component';
import { EnigmaTasksService } from '../../helpers/EnigmaMachine/services/enigma-tasks.service';
import { PlugboardColors } from '../../helpers/plugboard/constants';

@Component({
  selector: 'app-enigma-machine',
  standalone: true,
  imports: [
    RotorsComponent,
    KeyboardComponent,
    LampBoardComponent,
    PlugboardComponent,
  ],
  templateUrl: './enigma-machine.component.html',
  styleUrl: './enigma-machine.component.scss',
})
export class EnigmaMachineComponent {
  rows: string[][] = [
    ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'],
    ['J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q'],
    ['R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
  ];
  plugboardRows: PlugboardKey[][] = [[]];

  plugboardSettings: string[] = [];
  colors: string[];

  constructor(private enigmaConfigService: EnigmaTasksService) {
    this.colors = PlugboardColors;
  }

  ngOnInit() {
    this.plugboardSettings = splitIntoChunks(
      this.enigmaConfigService.getMachineSetup().Plugboard
    );

    this.plugboardRows = this.rows.map((row) => {
      return row.map((key) => {

        const buildKey = {
          key,
          color: '#222',
        };

        this.plugboardSettings.forEach((setting, index) => {
          if (setting.split("").includes(key)) {
            buildKey.color = this.colors[index];
          }
        });

        return buildKey;
      });
    });
  }
}

function splitIntoChunks(input: string): string[] {
  const chunks: string[] = [];

  for (let i = 0; i < input.length; i += 2) {
    chunks.push(input.slice(i, i + 2));
  }

  return chunks;
}
