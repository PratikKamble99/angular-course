import { inject, Injectable } from '@angular/core';
import { Todo } from '../model/todos.type';
import { HttpClient } from '@angular/common/http';

// Injectable is a decorator
@Injectable({
  // this enables using this in any component
  providedIn: 'root'
})
export class TodosService {
  http = inject(HttpClient);

  // todoItems: Todo[] = [
  //   {
  //     id:1,
  //     userId:1,
  //     title:'Todo 1',
  //     completed:false 
  //   },
  //   {
  //     id:2,
  //     userId:1,
  //     title:'Todo 2',
  //     completed:false 
  //   }
  // ];

 getTodos(){
  return this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos')
 }

  constructor() { }
}
