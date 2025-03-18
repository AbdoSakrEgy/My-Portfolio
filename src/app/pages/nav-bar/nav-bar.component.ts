import { AfterViewInit, Component } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { ActivatedRoute } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { MobileNavbarComponent } from './mobile-navbar/mobile-navbar.component';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [MatBadgeModule, MobileNavbarComponent],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
})
export class NavBarComponent implements AfterViewInit {
  constructor(
    private route: ActivatedRoute,
    private scroller: ViewportScroller
  ) {}
  ngAfterViewInit(): void {
    this.route.fragment.subscribe((fragment) => {
      if (fragment) {
        this.scroller.scrollToAnchor(fragment);
      }
    });
  }
}
