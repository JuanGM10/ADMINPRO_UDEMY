import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css']
})
export class IncrementadorComponent implements OnInit {
  @ViewChild('txtProgress') txtprogress: ElementRef;
  @Input() leyenda: string = 'Leyenda';
  @Input() progreso: number = 50;

  @Output() emitirCambio: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }


  onChanges(newValue: number) {

    if ( newValue >= 100 ) {
      this.progreso = 100;
    } else if ( newValue <= 0 || newValue == null)  {
      this.progreso = 0;
    } else {
      this.progreso = newValue;
    }
    this.txtprogress.nativeElement.value = this.progreso;

    this.emitirCambio.emit(this.progreso);
  }
  cambiarValor(valor: number) {
    if ( this.progreso > 100 && valor > 0 ) {
      this.progreso = 100;
      return;
    }

    if ( this.progreso <= 0 && valor < 0 ) {
      this.progreso = 0;
      return;
    }
    this.progreso += valor;

    this.emitirCambio.emit(this.progreso);
  }
}
