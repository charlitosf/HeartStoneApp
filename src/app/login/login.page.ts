import { Component, OnInit } from '@angular/core';
import {Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  miForm: any;
  login: boolean = false;

  constructor(private fb: FormBuilder, private router: Router) {
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
      this.router.navigateByUrl('/cards');
    }
  }

  ngOnInit() {}
}
