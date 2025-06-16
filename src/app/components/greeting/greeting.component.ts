import { Component, input } from '@angular/core';

@Component({
  selector: 'app-greeting',
  imports: [],
  templateUrl: './greeting.component.html',
  styleUrl: './greeting.component.scss'
})
export class GreetingComponent {
  //In Angular, @Input() is a decorator that allows a child component to receive data from its parent component.
  message = input("Default message");
}
