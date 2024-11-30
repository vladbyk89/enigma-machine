import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectRotorComponent } from './select-rotor.component';

describe('SelectRotorComponent', () => {
  let component: SelectRotorComponent;
  let fixture: ComponentFixture<SelectRotorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectRotorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SelectRotorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
