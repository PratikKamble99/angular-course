import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  imports: [RouterLink, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  // Signals are reactive variables that notify Angular when their values change —
  // enabling automatic UI updates without manually triggering change detection.
  title = signal('My Angular Project');

  router = inject(Router);
  authService = inject(AuthService);

  logout() {
    this.authService.currUserSig.set(null);
    localStorage.clear();
    this.router.navigateByUrl('/');
  }
}
