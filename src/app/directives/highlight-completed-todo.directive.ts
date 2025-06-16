import { Directive, input, effect, ElementRef, inject } from '@angular/core';

@Directive({
  selector: '[appHighlightCompletedTodo]',
  standalone: true
})
export class HighlightCompletedTodoDirective {
  isCompleted = input<boolean>(false);
  el = inject(ElementRef)
  constructor() { }

  stylesEffect = effect(()=>{
    if(this.isCompleted()){
      this.el.nativeElement.style.textDecoration = 'line-through';
      this.el.nativeElement.style.backgroundColor = '#b3e6bd';
    }else{
      this.el.nativeElement.style.textDecoration = 'none';
      this.el.nativeElement.style.backgroundColor = 'transparent';
    }
  })

}
