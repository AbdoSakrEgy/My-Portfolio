import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  bootstrapDownload,
  bootstrapGithub,
  bootstrapLinkedin,
} from '@ng-icons/bootstrap-icons';
import { phosphorEyes } from '@ng-icons/phosphor-icons/regular';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatIconModule, NgIcon],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  viewProviders: [
    provideIcons({
      bootstrapDownload,
      bootstrapGithub,
      bootstrapLinkedin,
      phosphorEyes,
    }),
  ],
})
export class HomeComponent {}
