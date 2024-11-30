import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RotorsComponent } from './rotors.component';

describe('RotorsComponent', () => {
  let component: RotorsComponent;
  let fixture: ComponentFixture<RotorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RotorsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RotorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
