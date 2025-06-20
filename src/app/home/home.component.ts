import { Component, signal } from '@angular/core';
import { GreetingComponent } from '../components/greeting/greeting.component';
import { CounterComponent } from '../components/counter/counter.component';
import { from, Observable, of } from 'rxjs';

@Component({
  selector: 'app-home',
  imports: [GreetingComponent, CounterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  homeMessage = signal('Hello world, 7777');
  /**
   * A function that listens to keyup events in the home component.
   * When a keyup event is triggered, it logs the event to the console.
   * @param event The KeyboardEvent that triggered the keyup event.
   * @returns void
   */
  keyupHandler(event: KeyboardEvent): void {
    console.log(event);
  }

  data: number[] = [];

  array = [1, 2, 3, 4, 5];

  // observable
  // myObservable = new Observable((observer) => {
  //   setTimeout(() => observer.next(1), 1000);
  //   setTimeout(() => observer.next(2), 2000);
  //   setTimeout(() => observer.next(3), 3000);
  //   setTimeout(() => observer.next(4), 4000);
  //   // setTimeout(() => observer.error(new Error('Something went wrong')), 4500);
  //   setTimeout(() => observer.next(5), 5000);
  //   setTimeout(() => observer.next(6), 6000);
  //   setTimeout(() => observer.next(7), 7000);
  //   setTimeout(() => observer.next(8), 8000);
  //   setTimeout(() => observer.complete(), 8200);
  // });

  // ATERNATIVE OF OBSERVABLE CEATEION USING OF
  // myObservable = of(...this.array); // This streams data one by one. It streams array as single ele
  myObservable = from(this.array); // It Takes iterable value as argument and  it ierataes it in observable.

  // observer
  // It emits next, error and completion event
  subscribeObserver() {
    this.myObservable.subscribe({
      // next event
      next: (value: any) => {
        this.data.push(value);
        console.log('Received:', value);
      },
      // error event
      error: (err) => console.error('Error:', err),
      // completion event
      complete: () => console.log('Completed data streaming'),
    });
  }
}

/* Example usecase of observer

  CREATE TIMER 

  const timerObservable = new Observable(observer => {
    let count = 0;
    const interval = setInterval(() => {
      observer.next(count++);
      if (count > 3) {
        clearInterval(interval);
        observer.complete();
      }
    }, 1000);
  });

  timerObservable.subscribe({
    next: val => console.log('Timer:', val),
    complete: () => console.log('Done')
  });
*/
