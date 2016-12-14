import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Input() titleMessage: string;
  @Output() userLogged = new EventEmitter<String>();

  showForm: boolean = false;
  loginPlaceHolder: string;
  user: any;

  constructor() { }

  ngOnInit() {
    this.loginPlaceHolder = "login";
  }

  pressLoginButton() {
    this.showForm = true;
  }

  cancelLogin() {
    this.showForm = false;
  }

  login()
  {
    this.userLogged.emit(this.user);
  }
}
