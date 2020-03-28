import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent {
  carName = '';
  addCarStatus = false;

  addCar() {
    this.addCarStatus = true;
  }

}
