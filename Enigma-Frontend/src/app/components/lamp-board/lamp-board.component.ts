import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnigmaTasksService } from '../../helpers/EnigmaMachine/services/enigma-tasks.service';

@Component({
  selector: 'app-lamp-board',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lamp-board.component.html',
  styleUrl: './lamp-board.component.scss',
})
export class LampBoardComponent implements OnInit {
  @Input() lampStatus: string = '';
  @Input() rows: string[][] = [[]];

  constructor(private enigmaConfigService: EnigmaTasksService) {}

  ngOnInit(): void {
    this.enigmaConfigService.getCipheredText().subscribe((value) => {
      this.lampStatus = value;
    });
  }
}
