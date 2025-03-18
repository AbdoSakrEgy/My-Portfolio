import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  bootstrapGithub,
  bootstrapArrowUpRight,
  bootstrapArrowLeft,
  bootstrapArrowRight,
} from '@ng-icons/bootstrap-icons';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NgIcon],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
  viewProviders: [
    provideIcons({
      bootstrapGithub,
      bootstrapArrowUpRight,
      bootstrapArrowLeft,
      bootstrapArrowRight,
    }),
  ],
})
export class ProjectsComponent {
  selectedProject = 0;
  projects = [
    {
      name: 'TasksApp admin',
      description: 'Angular CRUD app for admin side.',
      tools: ['Angular', 'AngularMaterial', 'Tailwindcss', 'NgRx'],
      projectImage: '../../../assets/Projects image/TasksApp-admin.png',
      projectGithub: 'https://github.com/AbdoSakrEgy/TasksApp-admin',
      projectLink: 'https://tasks-admin-app-angular.netlify.app/login',
    },
    {
      name: 'TasksApp user',
      description: 'Angular CRUD app for user side.',
      tools: ['Angular', 'AngularMaterial', 'Tailwindcss', 'NgRx'],
      projectImage: '../../../assets/Projects image/TasksApp-user.png',
      projectGithub: 'https://github.com/AbdoSakrEgy/TasksApp-user',
      projectLink: 'https://tasks-user-app-angular.netlify.app/login',
    },
    {
      name: 'market admin',
      description:
        'An angular application for control products of market apo, create new products, update products, delete products, read users carts.',
      tools: ['Angular', 'AngularMaterial', 'Tailwindcss'],
      projectImage: '../../../assets/Projects image/market-admin.png',
      projectGithub: 'https://github.com/AbdoSakrEgy/market-admin',
      projectLink: 'siteLink',
    },
    {
      name: 'market user',
      description: 'E-commerce App for browsing products.',
      tools: ['Angular', 'Tailwindcss'],
      projectImage: '../../../assets/Projects image/Market.png',
      projectGithub: 'https://github.com/AbdoSakrEgy/Market',
      projectLink: 'https://abdosakregy.github.io/Market/products',
    },
    {
      name: 'portfolio',
      description: 'My portfolio.',
      tools: ['React', 'ReactRouterDdom', 'Tailwindcss'],
      projectImage:
        '../../../assets/Projects image/abdulrahimSakr-personal-website.png',
      projectGithub:
        'https://github.com/AbdoSakrEgy/abdulrahimSakr-personal-website',
      projectLink:
        'https://abdosakregy.github.io/abdulrahimSakr-personal-website/',
    },
    {
      name: 'user info',
      description:
        'Angular Responsive Web Page for Viewing and Managing Personal Data, Contact Details, and Comments',
      tools: ['Angular', 'AngularMaterial', 'Tailwindcss'],
      projectImage: '../../../assets/Projects image/user-info.png',
      projectGithub: 'https://github.com/AbdoSakrEgy/user-info',
      projectLink: 'https://abdosakregy.github.io/user-info/users-info',
    },
    {
      name: 'user dashboard',
      description:
        'React responsive web page that allows the user to view and manage personal data, contact details and comments.',
      tools: ['React', 'ReactRouterDdom', 'Tailwindcss', 'React Suite'],
      projectImage: '../../../assets/Projects image/user-dashboard.png',
      projectGithub: 'https://github.com/AbdoSakrEgy/user-dashboard',
      projectLink: 'https://abdosakregy.github.io/user-dashboard/',
    },
    {
      name: 'ecommerce clientside',
      description:
        'A React + Redux application for browsing products, adding them to cart, and checking out. It includes user registration and login.',
      tools: ['React', 'ReactRouterDdom', 'ReduxToolkit', 'Tailwindcss'],
      projectImage:
        '../../../assets/Projects image/ecommerce-app-clientside.png',
      projectGithub: 'https://github.com/AbdoSakrEgy/ecommerce-app-clientside',
      projectLink: 'https://abdosakregy.github.io/ecommerce-app-clientside/',
    },
    {
      name: 'specialize clinic',
      description:
        'Website like Vezeeta, which helps doctors market themselves and help the user find the nearest doctor and make a quick appointment.',
      tools: ['React', 'Tailwindcss'],
      projectImage:
        '../../../assets/Projects image/Aspecialize-clinic-systemngular.png',
      projectGithub: 'https://github.com/AbdoSakrEgy/specialize-clinic-system',
      projectLink: 'https://abdosakregy.github.io/specialize-clinic-system/',
    },
    {
      name: 'TodoList',
      description: 'CRUD app to organize daily tasks.',
      tools: ['React', 'ReactRouterDdom', 'ReduxToolkit', 'Tailwindcss'],
      projectImage: '../../../assets/Projects image/TodoList-App.png',
      projectGithub: 'https://github.com/AbdoSakrEgy/TodoList-App',
      projectLink: 'https://abdosakregy.github.io/TodoList-App/',
    },
    {
      name: 'custom paginator',
      description: 'How to paginate some data using custom styles.',
      tools: ['Angular', 'NgRx'],
      projectImage: '../../../assets/Projects image/Angular.jpg',
      projectGithub: 'https://github.com/AbdoSakrEgy/custom-paginator-angular',
      projectLink: 'https://abdosakregy.github.io/custom-paginator-angular/',
    },
  ];

  previous() {
    if (this.selectedProject > 0) {
      this.selectedProject--;
    }
  }
  next() {
    if (this.selectedProject < this.projects.length - 1) {
      this.selectedProject++;
    }
  }
}
