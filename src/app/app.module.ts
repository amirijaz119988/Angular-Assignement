import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './routingModules';
import { AppComponent } from './app.component';
import { AssignmentUpload } from './UploadAssgnement/AssignementUpload';
import { AssignmentDelete } from './DeleteAssignement/Delete';
import { MarkAssignment } from './MarkAssignement/mark';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    AssignmentUpload,
    AssignmentDelete,
    MarkAssignment
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
