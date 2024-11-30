import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LampBoardComponent } from './lamp-board.component';

describe('LampBoardComponent', () => {
  let component: LampBoardComponent;
  let fixture: ComponentFixture<LampBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LampBoardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LampBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
