import { Component, inject, OnInit, signal } from '@angular/core';
import { TodosService } from '../services/todos.service';
import { Todo } from '../model/todos.type';
import { catchError } from 'rxjs';
import { TodoItemComponent } from '../components/todo-item/todo-item.component';
import { FormsModule } from '@angular/forms';
import { FilterTodoPipe } from '../pipes/filter-todo.pipe';

@Component({
  selector: 'app-todos',
  imports: [TodoItemComponent, FormsModule, FilterTodoPipe],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss'
})
export class TodosComponent implements OnInit{
  todoService = inject(TodosService);
  todoItems = signal<Todo[]>([]);

  searchTerm = signal('');

  ngOnInit(): void {
    this.todoService.getTodos()
    .pipe( catchError((err) => {
      console.log(err);
      throw err
    })
  )
  .subscribe((res)=>{
    // setTimeout(() => {
      this.todoItems.set(res);
    // }, 2000);
    })
    // this.todoItems.set(this.todoService.todoItems);
  }

  toggleTodo(_todo: Todo){
    this.todoItems.update( (todos) => {
      return todos.map((todo) => {
        if(_todo.id === todo.id){
          todo.completed = !todo.completed;
        }
        return todo;
      })
    })
  }
}
