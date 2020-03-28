import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent {
  carName = '';
  addCarStatus = false;
  cars: string[] = ['Ford', 'Mazda', 'Audi'];
  items = [
    {id: 3, name: 'item 1'},
    {id: 7, name: 'item 2'},
    {id: 5, name: 'item 3'}
  ]

  addCar() {
    this.addCarStatus = true;
    this.cars.push(this.carName);
    this.carName = '';
  }

}
