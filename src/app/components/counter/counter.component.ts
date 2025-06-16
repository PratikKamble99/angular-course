import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {
  counter = signal(0);
  increment() : void {
    // this is same as useState hook in react js
    this.counter.update((value) => value + 1);
  };
  decrement() : void {
    this.counter.update((value) => value - 1);
  };
  reset() : void {
    this.counter.set(0);
  }
}
