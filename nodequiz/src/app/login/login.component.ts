import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  employeeId: string;

  constructor(public router: Router) {}

  ngOnInit() {}

  loginUser(id: string) {
    this.router.navigateByUrl('/presentations');
  }
}
