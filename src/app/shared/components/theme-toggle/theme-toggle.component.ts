import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-theme-toggle',
    imports: [CommonModule],
    templateUrl: './theme-toggle.component.html',
    styleUrl: './theme-toggle.component.css'
})
export class ThemeToggleComponent {
  isDark = false;

  toggleTheme() {
    this.isDark = !this.isDark;
    const html = document.querySelector('html');
    if (this.isDark) {
      html?.setAttribute('data-theme', 'dark');
    } else {
      html?.setAttribute('data-theme', 'rental'); // Or 'light'
    }
  }
}
