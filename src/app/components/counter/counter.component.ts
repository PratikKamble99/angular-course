import { Component, signal } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../../states/app.state';
import { selectCount } from '../../states/counter/counter.selector';
import { AsyncPipe } from '@angular/common';
import {
  decrement,
  increment,
  reset,
} from '../../states/counter/counter.actions';

/* 
  AsyncPipe : 
    he async pipe subscribes to an Observable or Promise and returns the latest value it has emitted. 
    When a new value is emitted, the async pipe marks the component to be checked for changes
*/
@Component({
  selector: 'app-counter',
  imports: [AsyncPipe],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss',
})
export class CounterComponent {
  counter = signal(0);

  count$: Observable<number>;

  constructor(private store: Store<AppState>) {
    this.count$ = this.store.select(selectCount);
  }

  increment(): void {
    // this is same as useState hook in react js
    // this.counter.update((value) => value + 1);

    this.store.dispatch(increment()); // this dispatches/calls action which we created in coun ter.actions.ts
  }
  decrement(): void {
    // this.counter.update((value) => value - 1);
    this.store.dispatch(decrement());
  }
  reset(): void {
    // this.counter.set(0);
    this.store.dispatch(reset());
  }
}
