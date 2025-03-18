import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { ionMenu, ionClose } from '@ng-icons/ionicons';

@Component({
  selector: 'app-mobile-navbar',
  standalone: true,
  imports: [NgIcon],
  templateUrl: './mobile-navbar.component.html',
  styleUrl: './mobile-navbar.component.css',
  viewProviders: [provideIcons({ ionMenu, ionClose })],
})
export class MobileNavbarComponent {
  isOverlayMenu = false;
  openCloseOverlayMenu() {
    this.isOverlayMenu = !this.isOverlayMenu;
  }
}
