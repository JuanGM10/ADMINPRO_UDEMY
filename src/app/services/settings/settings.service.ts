import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable()
export class SettingsService {
  ajustes: Ajustes = {
    temaUrl: 'assets/css/colors/default.css',
    tema: 'default'
  };
  constructor(@Inject(DOCUMENT) private mydocument) {
    this.cargarAjustes();
  }


  guardarAjustes() {
    localStorage.setItem('ajustes', JSON.stringify(this.ajustes));
  }

  cargarAjustes() {
    if (localStorage.getItem('ajustes')) {
      this.ajustes = JSON.parse(localStorage.getItem('ajustes'));
      this.aplicaTema(this.ajustes.tema);
    } else {
      console.log('Usando ajustes por defecto');
      this.aplicaTema(this.ajustes.tema);
    }
  }


  aplicaTema( tema: string) {
    const url = `assets/css/colors/${ tema }.css`;
    this.mydocument.getElementById('tema').setAttribute('href', url);
    // grabando los datos en el LocalStorage
    this.ajustes.tema = tema;
    this.ajustes.temaUrl = url;

    this.guardarAjustes();
  }

}

interface Ajustes {
  temaUrl: string;
  tema: string;
}
