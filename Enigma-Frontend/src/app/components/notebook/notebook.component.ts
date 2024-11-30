import { Component, OnInit } from '@angular/core';
import { EnigmaTasksService } from '../../helpers/EnigmaMachine/services/enigma-tasks.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-notebook',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './notebook.component.html',
  styleUrl: './notebook.component.scss',
})
export class NotebookComponent implements OnInit {
  cipheredText: string = '';
  inputText: string = '';

  constructor(private service: EnigmaTasksService) {}

  async onCipherText() {
    if (this.inputText === '') {
      return;
    }

    this.cipheredText = '';

    const characters = this.inputText.split('');

    for (const char of characters) {
      await this.service.cipherText(char);
      await new Promise((resolve) => setTimeout(resolve, 200));
    }

    this.inputText = '';
  }

  onKeyDown(event: any) {
    if (event.key === 'Enter') {
      this.onCipherText();
    }
  }

  ngOnInit(): void {
    this.service.getCipheredText().subscribe((value) => {
      this.cipheredText += value;
    });

    this.service.getPressedKey().subscribe((value) => {
      this.inputText += value;
    });
  }
}
