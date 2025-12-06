import { Component, inject, signal } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd, Event as RouterEvent } from '@angular/router';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { AIAssistantComponent } from './shared/components/ai-assistant/ai-assistant.component';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, AIAssistantComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'rentalFE';
  showNavbar = signal(true);
  private router = inject(Router);

  constructor() {
    this.router.events.pipe(
      filter((event: RouterEvent): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      const hiddenRoutes = ['/login', '/register'];
      const currentUrl = event.urlAfterRedirects.split('?')[0];
      this.showNavbar.set(!hiddenRoutes.includes(currentUrl));
    });
  }
}
