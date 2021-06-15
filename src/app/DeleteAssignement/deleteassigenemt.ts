import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AssignmentDelete } from './Delete';

describe('DeleteAssignmentComponent', () => {
  let component: AssignmentDelete;
  let fixture: ComponentFixture<AssignmentDelete>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignmentDelete ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentDelete);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
