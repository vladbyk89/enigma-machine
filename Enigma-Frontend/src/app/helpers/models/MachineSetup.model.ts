import RotorInterface from "../Rotor/Model/RotorInterface";

export interface MachineSetup {
  Rotors: RotorInterface[];
  Reflector: string;
  Plugboard: string;
}
