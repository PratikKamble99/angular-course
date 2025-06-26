import {
  afterNextRender,
  Component,
  inject,
  Injector,
  OnInit,
  PLATFORM_ID,
  runInInjectionContext,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './home/home.component';
import { UserService } from './services/user.service';
import { catchError } from 'rxjs';
import { AuthService } from './services/auth.service';
import { isPlatformBrowser } from '@angular/common';

// This is component decorator
@Component({
  selector: 'app-root',
  // imports are used to import the components, modules, and other dependencies
  imports: [RouterOutlet, HeaderComponent, HomeComponent],
  // template is inline html which we inject in the component
  template: `
    <app-header />
    <main>
      <!-- <app-home></app-home> -->
      <router-outlet />
    </main>
  `,
  // this is inline style which we inject in the component
  // this style only apply to this component not any global element.
  styles: [
    `
      div {
        color: red;
      }
    `,
  ],
  // template url is used to point to the external html file
  // templateUrl: './app.component.html',
  // styleUrl: './app.component.scss'
})
export class AppComponent {
  // this is a property, It is works same as prop in react js

  title = 'crash-course';
  private injector = inject(Injector); // ✅ Get Angular's DI context

  userService = inject(UserService);
  PLATFORM_ID$ = inject(PLATFORM_ID);
  // authService = inject(AuthService);

  ngOnInit() {
    let token = undefined;

    // to use browser APIS
    // if (isPlatformBrowser(this.PLATFORM_ID$)) {
    //   token = localStorage.getItem('token');
    // }
    runInInjectionContext(this.injector, () => {
      afterNextRender(() => {
        token = localStorage.getItem('token');
      });
    });

    console.log(token);

    if (token) {
      this.userService
        .getUser()
        .pipe(
          catchError((err) => {
            console.log(err);
            throw err;
          })
        )
        .subscribe((res) => {
          console.log(res);
        });
    }
  }
}
