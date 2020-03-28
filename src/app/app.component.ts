import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Theory';
  inputText = '';

  onKeyUp(event) {
    this.inputText = event.target.value;
    event.target.value = '';
  }
}
