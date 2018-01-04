import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../shared/service/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'moltin-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });

  constructor(public fb: FormBuilder, private _authService: AuthService, private _router: Router) {}

  ngOnInit() {
  }

  login(): void {
    const username = this.loginForm.controls.username.value;
    const password = this.loginForm.controls.password.value;
    if ((username === 'moltin-admin') && (password === 'P@ssAdmin')) {
      this._authService.login();
      this._router.navigate(['/dashboard']);
    }
  }

  logout(): void {
    this._authService.logout();
    this._router.navigate(['/']);
  }
}
