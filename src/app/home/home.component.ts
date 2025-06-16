import { Component, signal } from '@angular/core';
import { GreetingComponent } from '../components/greeting/greeting.component';
import { CounterComponent } from "../components/counter/counter.component";


@Component({
  selector: 'app-home',
  imports: [GreetingComponent, CounterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
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
}
