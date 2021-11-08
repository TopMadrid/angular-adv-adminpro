import { Component } from '@angular/core';



@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component {

 public labels1: string[] = ['Mis Sales', 'Almacenes Sales', 'Email Sales'];
 public data1 = [
  [100, 100, 100],
];
}
