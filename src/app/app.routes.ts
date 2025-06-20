import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TodosComponent } from './todos/todos.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    // same as lazy loading in react js
    loadComponent: () =>
      import('./home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'todos',
    // loadComponent: () => import('./todos/todos.component').then((m) => m.TodosComponent)
    component: TodosComponent,
  },
  {
    path: 'reactive-form',
    // loadComponent: () => import('./todos/todos.component').then((m) => m.TodosComponent)
    component: ReactiveFormComponent,
  },
];
