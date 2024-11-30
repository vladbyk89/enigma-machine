import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RotorItemComponent } from './rotor-item.component';

describe('RotorItemComponent', () => {
  let component: RotorItemComponent;
  let fixture: ComponentFixture<RotorItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RotorItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RotorItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
