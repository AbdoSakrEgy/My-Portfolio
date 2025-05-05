import { Component, inject, ViewEncapsulation } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { ionLogoAngular, ionLogoReact } from '@ng-icons/ionicons';
import { bootstrapGit } from '@ng-icons/bootstrap-icons';
import {
  simpleTailwindcss,
  simpleRedux,
  simpleReactrouter,
  simpleReacthookform,
  simpleDaisyui,
  simpleNextdotjs,
  simpleNgrx,
  simpleBootstrap,
  simpleI18next,
  simplePostman,
} from '@ng-icons/simple-icons';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [NgIcon, MatTooltipModule],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css',
  viewProviders: [
    provideIcons({
      ionLogoAngular,
      ionLogoReact,
      bootstrapGit,
      simpleTailwindcss,
      simpleRedux,
      simpleReactrouter,
      simpleReacthookform,
      simpleDaisyui,
      simpleNextdotjs,
      simpleNgrx,
      simpleBootstrap,
      simpleI18next,
      simplePostman,
    }),
  ],
  encapsulation: ViewEncapsulation.None, // Disable view encapsulation
})
export class ResumeComponent {
  selectedOption = 'experience';
  readonly dialog = inject(MatDialog);

  selectOption(option: string) {
    switch (option) {
      case 'experience':
        this.selectedOption = 'experience';
        break;
      case 'education':
        this.selectedOption = 'education';
        break;
      case 'skills':
        this.selectedOption = 'skills';
        break;
      case 'aboutMe':
        this.selectedOption = 'aboutMe';
        break;
      default:
        this.selectedOption = 'experience';
    }
  }
  openDialog(certificateName: any): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      data: { certificateName: certificateName },
      maxHeight: '90%',
      width: '600px',
    });

    dialogRef.afterClosed().subscribe((result) => {});
  }
}

// Dialog component
@Component({
  standalone: true,
  selector: 'dialog-overview-example-dialog',
  template:
    '<div class="flex justify-center items-center"><img [src]="imgForView" alt="certificate-image"></div>',
  imports: [],
})
export class DialogOverviewExampleDialog {
  readonly dialogRef = inject(MatDialogRef<DialogOverviewExampleDialog>);
  readonly data = inject<any>(MAT_DIALOG_DATA);
  imgForView =
    '../../../assets/Abdulrahim cv/Certificates/MegaDev certificate.jpeg';

  constructor() {
    switch (this.data.certificateName) {
      case 'ebdaa':
        this.imgForView =
          '../../../assets/Abdulrahim cv/Certificates/MegaDev certificate.jpeg';
        break;
      case 'bachelor':
        this.imgForView =
          '../../../assets/Abdulrahim cv/Certificates/FCI certificate.jpeg';
        break;
      case 'highSchool1':
        this.imgForView =
          '../../../assets/Abdulrahim cv/Certificates/High school certificate 1.jpeg';
        break;
      case 'highSchool2':
        this.imgForView =
          '../../../assets/Abdulrahim cv/Certificates/High school certificate 2.jpeg';
        break;
      default:
        break;
    }
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
