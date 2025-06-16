import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TodosComponent } from './todos/todos.component';

export const routes: Routes = [
    {
        path: '',
        pathMatch:'full',
        // same as lazy loading in react js
        loadComponent: () => import('./home/home.component').then((m) => m.HomeComponent)
    },
    {
        path:'todos',
        // loadComponent: () => import('./todos/todos.component').then((m) => m.TodosComponent)
        component: TodosComponent
    }
];
