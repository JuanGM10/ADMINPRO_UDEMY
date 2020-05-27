import { Component, OnInit } from '@angular/core';

// Servicios
import { SidebarService } from '../../services/service.index';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit {

  constructor(public sideBarService: SidebarService) { }

  ngOnInit() {
  }

}
