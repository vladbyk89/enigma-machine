import { Component } from '@angular/core';
import { EnigmaMachineComponent } from '../../components/enigma-machine/enigma-machine.component';
import { NotebookComponent } from '../../components/notebook/notebook.component';

@Component({
  selector: 'app-cipher',
  standalone: true,
  imports: [EnigmaMachineComponent, NotebookComponent],
  templateUrl: './cipher.component.html',
  styleUrl: './cipher.component.scss',
})
export class CipherComponent {}
