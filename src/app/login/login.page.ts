import { Component, OnInit } from '@angular/core';
import {Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  miForm: any;
  login: boolean = false;

  constructor(private fb: FormBuilder) {
    this.miForm = this.fb.group({
      emailControl: ['', [Validators.required, Validators.email]],
      passwordControl: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  doLogin() {
    if (this.miForm.dirty && this.miForm.valid) {
      console.log("Email: " + this.miForm.value.emailControl);
      console.log("Password: " + this.miForm.value.passwordControl);
      this.login = true;
    }
  }

  ngOnInit() {}
}
