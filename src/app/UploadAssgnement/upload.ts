import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentUpload } from './AssignementUpload';

describe('UploadAssignmentComponent', () => {
  let component: AssignmentUpload;
  let fixture: ComponentFixture<AssignmentUpload>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignmentUpload ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentUpload);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
