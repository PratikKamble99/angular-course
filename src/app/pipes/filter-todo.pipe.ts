import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../model/todos.type';

@Pipe({
  name: 'filterTodo'
})
export class FilterTodoPipe implements PipeTransform {
  transform(value: Todo[], searchTerm: string): Todo[] {
    return value.filter((todo) => todo.title.toLowerCase().includes(searchTerm.toLowerCase()));
  }

}
