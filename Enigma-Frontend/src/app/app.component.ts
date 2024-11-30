import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NotebookComponent } from './components/notebook/notebook.component';
import { EnigmaMachineComponent } from './components/enigma-machine/enigma-machine.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NotebookComponent, EnigmaMachineComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'enigma-frontend';
}
