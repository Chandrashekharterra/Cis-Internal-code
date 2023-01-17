import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstLevelExaminationComponent } from './first-level-examination.component';

describe('FirstLevelExaminationComponent', () => {
  let component: FirstLevelExaminationComponent;
  let fixture: ComponentFixture<FirstLevelExaminationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstLevelExaminationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstLevelExaminationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
