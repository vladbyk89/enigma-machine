import { CommonModule } from '@angular/common';
import { Component, HostListener, Input } from '@angular/core';
import { EnigmaTasksService } from '../../helpers/EnigmaMachine/services/enigma-tasks.service';

@Component({
  selector: 'app-keyboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './keyboard.component.html',
  styleUrl: './keyboard.component.scss',
})
export class KeyboardComponent {
  @Input() rows: string[][] = [[]];

  pressedKey: string | null = null;

  constructor(private enigmaConfigService: EnigmaTasksService) {}

  onKeyPress(key: string) {
    this.resizeKey(key);

    this.enigmaConfigService.cipherText(key);
    this.enigmaConfigService.setPressedKey(key);
  }

  @HostListener('window:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent): void {
    if (/^[a-zA-Z]$/.test(event.key)) {
      const key = event.key.toUpperCase();

      this.resizeKey(key);

      this.enigmaConfigService.cipherText(key);
      this.enigmaConfigService.setPressedKey(key);
    }
  }

  resizeKey(key: string) {
    this.pressedKey = key;

    setTimeout(() => {
      this.pressedKey = null;
    }, 200);
  }
}
