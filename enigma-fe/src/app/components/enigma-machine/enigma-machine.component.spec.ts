import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnigmaMachineComponent } from './enigma-machine.component';

describe('EnigmaMachineComponent', () => {
  let component: EnigmaMachineComponent;
  let fixture: ComponentFixture<EnigmaMachineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnigmaMachineComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EnigmaMachineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
