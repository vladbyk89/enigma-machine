import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlugboardComponent } from './plugboard.component';

describe('PlugboardComponent', () => {
  let component: PlugboardComponent;
  let fixture: ComponentFixture<PlugboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlugboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlugboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
