import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import WiringRequestDto from '../../models/wiring-request.model';
import { MachineSetup } from '../../models/MachineSetup.model';
import { MachineTextDto } from '../../models/CipherMachineTextDto.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  }),
};

const initMachineSetup: MachineSetup = {
  Rotors: [
    {
      wiring: 'EKMFLGDQVZNTOWYHXUSPAIBRCJ',
      position: 0,
      notch: 1,
    },
    {
      wiring: 'AJDKSIRUXBLHWTMCQGZNPYFVOE',
      position: 2,
      notch: 12,
    },
    {
      wiring: 'BDFHJLCPRTXVZNYEIWGAKMUSQO',
      position: 12,
      notch: 24,
    },
  ],
  Reflector: 'YRUHQSLDPXNGOKMIEBFZCWVJAT',
  Plugboard: 'ABDGHWIJEYUQ',
};

const apiUrl = 'https://localhost:6001/api/';

@Injectable({
  providedIn: 'root',
})
export class EnigmaTasksService {
  private machineSetup: MachineSetup = initMachineSetup;

  private pressedKey: BehaviorSubject<string> = new BehaviorSubject<string>('');
  private cipheredText: BehaviorSubject<string> = new BehaviorSubject<string>(
    ''
  );

  constructor(private http: HttpClient) {}

  async cipherText(input: string) {
    const postUrl = apiUrl + 'Enigma/machine-cipher';

    const machineSetupDto = {
      ...this.machineSetup,
      Message: input,
    };

    this.http
      .post<MachineTextDto>(postUrl, machineSetupDto, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
      })
      .subscribe((cipheredData) => {
        this.setCipheredText(cipheredData.text);

        cipheredData.newPositions.forEach((position, index) => {
          this.machineSetup.Rotors[index].position = position;
        });
      });
  }

  getCipheredText(): Observable<string> {
    return this.cipheredText.asObservable();
  }

  setCipheredText(char: string): void {
    this.cipheredText.next(char);

    setTimeout(() => {
      this.cipheredText.next('');
    }, 500);
  }

  getPressedKey(): Observable<string> {
    return this.pressedKey.asObservable();
  }

  setPressedKey(key: string): void {
    this.pressedKey.next(key);

    setTimeout(() => {
      this.pressedKey.next('');
    }, 500);
  }

  getRotors(): Observable<WiringRequestDto[]> {
    return this.http.get<WiringRequestDto[]>(apiUrl + 'Rotor', httpOptions);
  }

  getReflectors(): Observable<WiringRequestDto[]> {
    return this.http.get<WiringRequestDto[]>(apiUrl + 'Reflector', httpOptions);
  }

  getMachineSetup(): MachineSetup {
    return this.machineSetup;
  }

  setMachineSetup(machineSetup: MachineSetup): void {
    this.machineSetup = machineSetup;
  }
}
