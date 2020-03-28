import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Input (1,2 way-binding)';
  inputText = '';

  onKeyUp(event) {
    this.inputText = event.target.value;
    event.target.value = '';
  }
}
