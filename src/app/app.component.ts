import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Assignement';
  name = 'Hafiz Amir Ijaz';
  testVar = 'Testing For Data Binding';
  save() {
    alert('You Have Clicked')
  }
}
