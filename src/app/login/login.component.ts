import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

declare function init_component();
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    init_component();
  }
  ingresar() {
    this.router.navigate(['/dashboard']);
  }
}
