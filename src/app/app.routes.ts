import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TodosComponent } from './todos/todos.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './services/auth-guard.service';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { roleGuard } from './guards/role.guard';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    // same as lazy loading in react js
    loadComponent: () =>
      import('./home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'register',
    // loadComponent: () => import('./todos/todos.component').then((m) => m.TodosComponent)
    component: RegisterComponent,
  },
  {
    path: 'login',
    // loadComponent: () => import('./todos/todos.component').then((m) => m.TodosComponent)
    component: LoginComponent,
  },
  {
    path: 'admin-dashboard',
    component: AdmindashboardComponent,
    canActivate: [roleGuard],
    data: { roles: ['admin'] }, // ✅ Only 'admin' can access
  },
  {
    path: 'user-dashboard',
    component: UserDashboardComponent,
    canActivate: [roleGuard],
    data: { roles: ['user', 'admin'] }, // ✅ 'user' or 'admin' can access
  },
  {
    path: 'unauthorized',
    component: UnauthorizedComponent,
  },
  {
    path: 'todos',
    // loadComponent: () => import('./todos/todos.component').then((m) => m.TodosComponent)
    component: TodosComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'reactive-form',
    // loadComponent: () => import('./todos/todos.component').then((m) => m.TodosComponent)
    component: ReactiveFormComponent,
  },
  { path: '**', redirectTo: '' },
];
