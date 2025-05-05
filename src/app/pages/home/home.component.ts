import {
  Component,
  ViewChild,
  ElementRef,
  AfterViewInit,
  HostListener,
} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  bootstrapDownload,
  bootstrapGithub,
  bootstrapLinkedin,
} from '@ng-icons/bootstrap-icons';

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
    }),
  ],
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('leftPupil') leftPupil!: ElementRef;
  @ViewChild('rightPupil') rightPupil!: ElementRef;
  @ViewChild('leftEyeContainer') leftEyeContainer!: ElementRef;
  @ViewChild('rightEyeContainer') rightEyeContainer!: ElementRef;

  ngAfterViewInit() {
    // Initial positioning
    this.updatePupilPosition(this.leftPupil.nativeElement, 0, 0);
    this.updatePupilPosition(this.rightPupil.nativeElement, 0, 0);
  }

  @HostListener('window:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (this.leftPupil && this.rightPupil && this.leftEyeContainer && this.rightEyeContainer) {
      // Left eye
      const leftEyeRect = this.leftEyeContainer.nativeElement.getBoundingClientRect();
      const leftEyeCenterX = leftEyeRect.left + leftEyeRect.width / 2;
      const leftEyeCenterY = leftEyeRect.top + leftEyeRect.height / 2;
      
      // Right eye
      const rightEyeRect = this.rightEyeContainer.nativeElement.getBoundingClientRect();
      const rightEyeCenterX = rightEyeRect.left + rightEyeRect.width / 2;
      const rightEyeCenterY = rightEyeRect.top + rightEyeRect.height / 2;
      
      // Mouse position
      const mouseX = event.clientX;
      const mouseY = event.clientY;
      
      // Update pupils position
      this.updatePupilPosition(
        this.leftPupil.nativeElement,
        mouseX - leftEyeCenterX,
        mouseY - leftEyeCenterY
      );
      
      this.updatePupilPosition(
        this.rightPupil.nativeElement,
        mouseX - rightEyeCenterX,
        mouseY - rightEyeCenterY
      );
    }
  }

  private updatePupilPosition(pupilElement: HTMLElement, offsetX: number, offsetY: number) {
    // Limit movement to a small radius
    const maxDistance = 4;
    const distance = Math.sqrt(offsetX * offsetX + offsetY * offsetY);
    
    let moveX = offsetX;
    let moveY = offsetY;
    
    if (distance > maxDistance) {
      const ratio = maxDistance / distance;
      moveX *= ratio;
      moveY *= ratio;
    }
    
    // Apply the transformation
    pupilElement.style.transform = `translate(${moveX}px, ${moveY}px)`;
  }
}
