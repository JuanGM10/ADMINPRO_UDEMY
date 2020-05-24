import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {
  constructor() { }

  titulo: string = 'Barra de progreso Azul';
  avance1: number = 20;
  avance2: number = 20;

  ngOnInit() {
  }
}
