import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { LoginService } from '../services/login.service';
import { catchError } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { InputFieldComponent } from '../shared/input-field/input-field.component';

@Component({
  selector: 'app-login',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputFieldComponent,
    InputFieldComponent,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  formdata: any = {};

  router = inject(Router);
  loginService = inject(LoginService);
  authService = inject(AuthService);

  reactiveForm: FormGroup;

  ngOnInit() {
    this.reactiveForm = new FormGroup({
      username: new FormControl(null, [Validators.required]),
      // email: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
      role: new FormControl(null, [Validators.required]),
    });
  }

  getRoleControl() {
    return this.reactiveForm.get('role') as FormControl;
  }

  onSubmit() {
    console.log(this.reactiveForm);

    if (this.reactiveForm.invalid) {
      this.reactiveForm.markAllAsTouched(); // Trigger validations in UI
      return;
    }
    this.formdata = this.reactiveForm.value;

    this.loginService
      .PostRegisterUser(this.formdata)
      .pipe(
        catchError((err) => {
          throw err;
        })
      )
      .subscribe((res) => {
        console.log(res);
        localStorage.setItem('token', res.accessToken);
        this.authService.currUserSig.set(res);
        this.authService.setRole(this.formdata.role);
        this.router.navigateByUrl('/');
      });
  }
}
