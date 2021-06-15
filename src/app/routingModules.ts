import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssignmentDelete } from './DeleteAssignement/Delete';
import { MarkAssignment } from './MarkAssignement/mark';
import { AssignmentUpload } from './UploadAssgnement/AssignementUpload';

const routes: Routes = [
  {
    path: 'upload',
    component: AssignmentUpload,
  },
  {
    path: 'delete',
    component: AssignmentDelete,
  },
  {
    path: 'mark',
    component: MarkAssignment,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
