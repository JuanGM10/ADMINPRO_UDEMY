import { Component, OnInit, Inject, ElementRef } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { SettingsService } from '../../services/service.index';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: [
  ]
})
export class AccountSettingsComponent implements OnInit {

  constructor(public ajustesService: SettingsService) { }

  ngOnInit(): void {
    this.colocarCheck();
  }

  cambiarColor( valor: string, link: any) {

    this.ajustesService.aplicaTema(valor);
    this.aplicarCheck(link);
  }

  aplicarCheck(link: any) {
    const selectores: any = document.getElementsByClassName('selector');
    for (const ref of selectores)  {
      ref.classList.remove('working');
    }

    link.classList.add('working');
  }

  colocarCheck() {
    const tema = this.ajustesService.ajustes.tema;
    const selectores: any = document.getElementsByClassName('selector');
    for (const ref of selectores) {
      if (ref.getAttribute('data-theme') === tema) {
        ref.classList.add('working');
        break;
      }
    }
  }
}
