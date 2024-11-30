import { Component, OnInit } from '@angular/core';
import { EnigmaTasksService } from '../../helpers/EnigmaMachine/services/enigma-tasks.service';
import { CommonModule } from '@angular/common';
import WiringRequestDto from '../../helpers/models/wiring-request.model';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import StartPageFormData from '../../helpers/models/startPage-formData.model';
import { LoaderComponent } from '../../components/loader/loader.component';
import { SelectRotorComponent } from '../../components/select-rotor/select-rotor.component';
import RotorInterface from '../../helpers/Rotor/Model/RotorInterface';
import { CreateMachineDto } from '../../helpers/models/CreateMachineDto.model';
import { MachineSetup } from '../../helpers/models/MachineSetup.model';

@Component({
  selector: 'app-start',
  standalone: true,
  imports: [CommonModule, FormsModule, LoaderComponent, SelectRotorComponent],
  templateUrl: './start.component.html',
  styleUrl: './start.component.scss',
})
export class StartComponent implements OnInit {
  // rotorNames: string[] = [
  //   'Rotor I',
  //   'Rotor II',
  //   'Rotor III',
  //   'Rotor IV',
  //   'Rotor V',
  // ];

  reflectorNames: string[] = ['Reflector A', 'Reflector B', 'Reflector C'];

  selectedRotors: RotorInterface[] = [];
  selectedReflector: string = '';

  availableRotors: WiringRequestDto[] = [];
  availableReflectors: WiringRequestDto[] = [];

  formData: StartPageFormData = {
    rightRotor: {
      wiring: '',
      position: 0,
      notch: 0,
    },
    middleRotor: {
      wiring: '',
      position: 0,
      notch: 0,
    },
    leftRotor: {
      wiring: '',
      position: 0,
      notch: 0,
    },
    reflector: '',
    plugboard: '',
  };

  dataFields: ('rightRotor' | 'middleRotor' | 'leftRotor')[] = [
    'rightRotor',
    'middleRotor',
    'leftRotor',
  ];

  errorMessage: string = '';
  isLoading: boolean = true;

  constructor(
    private enigmaConfigService: EnigmaTasksService,
    private router: Router
  ) {}


  onPlugboardChange(event: string) {
    if (isInvalidPlugboardInput(event)) {
      this.errorMessage =
        'Invalid plugboard configuration. Can use each letter at most once.';
    } else {
      this.errorMessage = '';
    }
  }

  startEnigma() {
    // make sure form is valid
    if (!allFormFieldsAreChosen(this.formData)) {
      this.errorMessage = 'Please select all options';
      return;
    }

    if (isInvalidPlugboardInput(this.formData.plugboard)) {
      this.errorMessage =
        'Invalid plugboard configuration. Can use each letter at most once.';
      return;
    }

    const indexOfReflector = this.reflectorNames.indexOf(
      this.formData.reflector
    );

    const getReflector = this.availableReflectors[indexOfReflector].wiring;

    this.selectedReflector = getReflector;

    this.selectedRotors = [
      {
        wiring: this.formData.rightRotor.wiring,
        position: this.formData.rightRotor.position,
        notch: this.formData.rightRotor.notch,
      },
      {
        wiring: this.formData.middleRotor.wiring,
        position: this.formData.middleRotor.position,
        notch: this.formData.middleRotor.notch,
      },
      {
        wiring: this.formData.leftRotor.wiring,
        position: this.formData.leftRotor.position,
        notch: this.formData.leftRotor.notch,
      },
    ];

    const newMachine: MachineSetup = {
      Rotors: this.selectedRotors,
      Reflector: getReflector,
      Plugboard: this.formData.plugboard,
    };

    this.enigmaConfigService.setMachineSetup(newMachine);

    console.log('Enigma machine started with settings:', newMachine);

    this.router.navigate(['/cipher']);
  }


  ngOnInit(): void {
    // Fetch rotor and reflector options from the service
    this.enigmaConfigService.getRotors().subscribe((rotors) => {
      setTimeout(() => {
        this.availableRotors = rotors;
        this.isLoading = false;
      }, 1000);
    });

    setTimeout(() => {
      this.isLoading = false;
    }, 3000);

    this.enigmaConfigService
      .getReflectors()
      .subscribe((reflectors) => (this.availableReflectors = reflectors));
  }
}

function allFormFieldsAreChosen(obj: StartPageFormData) {
  let allFiedsSelected = true;

  Object.values(obj).forEach((value) => {
    if (!value) {
      allFiedsSelected = false;
    }
  });

  return allFiedsSelected; // All keys have truthy values
}

function isInvalidPlugboardInput(plugboardConfiguration: string): boolean {
  // Check if the input is null or empty
  if (!plugboardConfiguration || plugboardConfiguration.trim() === '') {
    return true;
  }

  // Check if the input contains non-alphabetic characters
  if (/[^a-zA-Z]/.test(plugboardConfiguration)) {
    return true;
  }

  // Check if each letter appears at most once in the plugboard
  const seenLetters: Set<string> = new Set();

  for (const letter of plugboardConfiguration) {
    if (seenLetters.has(letter)) {
      // Letter appears more than once
      return true;
    }

    seenLetters.add(letter);
  }

  // If all checks pass, the plugboard input is valid
  return false;
}
