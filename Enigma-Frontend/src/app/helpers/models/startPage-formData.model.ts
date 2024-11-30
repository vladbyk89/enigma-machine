import RotorInterface from "../Rotor/Model/RotorInterface";

export default interface StartPageFormData {
  rightRotor: RotorInterface;
  middleRotor: RotorInterface;
  leftRotor: RotorInterface;
  reflector: string;
  plugboard: string;
}
