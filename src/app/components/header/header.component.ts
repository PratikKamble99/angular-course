import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  // Signals are reactive variables that notify Angular when their values change —
  // enabling automatic UI updates without manually triggering change detection.
  title = signal('My Angular Project');
}
