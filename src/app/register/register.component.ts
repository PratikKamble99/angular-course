import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { LoginService } from '../services/login.service';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-register',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  formdata: any = {};

  loginService = inject(LoginService);

  reactiveForm: FormGroup;

  ngOnInit() {
    this.reactiveForm = new FormGroup({
      username: new FormControl(null, [Validators.required]),
      // email: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
    });
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
        this.reactiveForm.reset({
          username: null,
          password: null,
          email: null,
        });
        console.log(res);
      });
  }
}
