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
      name: 'PriceTrackerApp',
      description: 'Track product prices and get updates automatically.',
      tools: ['NodeJS', 'Express', 'RESTful APIs', 'MongoDB'],
      projectImage: '../../../assets/ProjectsImage/NodeJS2.png',
      projectGithub: 'https://github.com/AbdoSakrEgy/PriceTrackerApp',
      projectLink: 'https://github.com/AbdoSakrEgy/PriceTrackerApp',
    },
    {
      name: 'ECommerceApp',
      description:
        'An e-commerce backend where users manage orders and sellers handle',
      tools: [
        'NodeJS',
        'Express',
        'RESTful APIs',
        'MongoDB',
        'Mongoose',
        'Nodemailer',
        'Multer',
      ],
      projectImage: '../../../assets/ProjectsImage/NodeJS.png',
      projectGithub: 'https://github.com/AbdoSakrEgy/ECommerceApp',
      projectLink: 'https://github.com/AbdoSakrEgy/ECommerceApp',
    },
    {
      name: 'MobileXpress',
      description: 'CST-ITI-G4 project for e-commerce website',
      tools: ['HTML', 'CSS', 'JS', 'Bootstrap'],
      projectImage: '../../../assets/ProjectsImage/MobileXpress.jpeg',
      projectGithub: 'https://github.com/AbdoSakrEgy/MobileXpress',
      projectLink: 'https://mobile-xpress.vercel.app/',
    },
    {
      name: 'ShopzyApp',
      description:
        'A scalable e-commerce app built with Node.js & NestJS, featuring products, carts,orders, and secure user management.',
      tools: [
        'NodeJS',
        'NestJS',
        'Express',
        'TypeScript',
        'MongoDB',
        'RESTful APIs',
      ],
      projectImage: '../../../assets/ProjectsImage/NodeJS2.png',
      projectGithub: 'https://github.com/AbdoSakrEgy/ShopzyApp',
      projectLink: 'https://github.com/AbdoSakrEgy/ShopzyApp',
    },
    {
      name: 'SocialApp',
      description:
        'Scalable social media backend with Node.js, TypeScript, and MongoDB.',
      tools: [
        'NoedJS',
        'Express',
        'TypeScript',
        'MongoDB',
        'Socket.IO',
        'AWS',
        'Nodemailer',
      ],
      projectImage: '../../../assets/ProjectsImage/NodeJS.png',
      projectGithub: 'https://github.com/AbdoSakrEgy/SocialApp',
      projectLink: 'https://github.com/AbdoSakrEgy/SocialApp',
    },
    {
      name: 'SarahaApp',
      description:
        'Backend implementation for a "Sarahah" style anonymous messaging application',
      tools: [
        'NoedJS',
        'Express',
        'RESTful APIs',
        'MongoDB',
        'NoSQL',
        'mongodb Driver',
        'Mongoose ODM',
      ],
      projectImage: '../../../assets/ProjectsImage/NodeJS2.png',
      projectGithub: 'https://github.com/AbdoSakrEgy/Saraha',
      projectLink: 'https://github.com/AbdoSakrEgy/Saraha',
    },
    {
      name: 'hunters-ijdc',
      description: 'private app for ijdc company.',
      tools: ['ReactJS', 'NextJS', 'Tailwindcss', 'React suite'],
      projectImage: '../../../assets/ProjectsImage/hunters-ijdc.png',
      projectGithub: 'https://github.com/AbdoSakrEgy/hunters-ijdc',
      projectLink: 'https://hunters-ijdc.vercel.app/',
    },
    {
      name: 'InfoViewer',
      description:
        'React responsive web page that allows the user to view and manage personal data, contact details and comments.',
      tools: ['React', 'ReactRouterDdom', 'Tailwindcss', 'React Suite'],
      projectImage: '../../../assets/ProjectsImage/user-dashboard.png',
      projectGithub: 'https://github.com/AbdoSakrEgy/InfoViewer',
      projectLink: 'https://abdosakregy.github.io/InfoViewer/',
    },
    {
      name: 'abdulrahimSakr-personal-website',
      description: 'Portfolio design.',
      tools: ['React', 'ReactRouterDdom', 'Tailwindcss'],
      projectImage:
        '../../../assets/ProjectsImage/abdulrahimSakr-personal-website.png',
      projectGithub:
        'https://github.com/AbdoSakrEgy/abdulrahimSakr-personal-website',
      projectLink:
        'https://abdosakregy.github.io/abdulrahimSakr-personal-website/',
    },
    {
      name: 'BusinessManagement-admin',
      description: 'Dashboard for business management.',
      tools: ['Angular', 'AngularMaterial', 'Tailwindcss', 'ngx-charts'],
      projectImage:
        '../../../assets/ProjectsImage/BusinessManagement-admin.png',
      projectGithub: 'https://github.com/AbdoSakrEgy/BusinessManagement-admin',
      projectLink: 'https://business-management-admin.vercel.app/dashboard',
    },
    {
      name: 'InfoViewer-2',
      description:
        'Angular Responsive Web Page for Viewing and Managing Personal Data, Contact Details, and Comments',
      tools: ['Angular', 'AngularMaterial', 'Tailwindcss'],
      projectImage: '../../../assets/ProjectsImage/user-info.png',
      projectGithub: 'https://github.com/AbdoSakrEgy/InfoViewer-2',
      projectLink: 'https://infoviewer-2.netlify.app',
    },
    // {
    //   name: 'ECommerce-user',
    //   description:
    //     'A React + Redux application for browsing products, adding them to cart, and checking out. It includes user registration and login.',
    //   tools: ['React', 'ReactRouterDdom', 'ReduxToolkit', 'Tailwindcss'],
    //   projectImage:
    //     '../../../assets/ProjectsImage/ecommerce-app-clientside.png',
    //   projectGithub: 'https://github.com/AbdoSakrEgy/ECommerce-user',
    //   projectLink: 'https://abdosakregy.github.io/ECommerce-user/',
    // },
    // {
    //   name: 'Market-user',
    //   description: 'E-commerce App for browsing products.',
    //   tools: ['Angular', 'Tailwindcss'],
    //   projectImage: '../../../assets/ProjectsImage/Market-user.png',
    //   projectGithub: 'https://github.com/AbdoSakrEgy/Market-user',
    //   projectLink: 'https://market-user-alpha.vercel.app/products',
    // },
    // {
    //   name: 'Market-admin',
    //   description:
    //     'An angular application for control products of market apo, create new products, update products, delete products, read users carts.',
    //   tools: ['Angular', 'AngularMaterial', 'Tailwindcss'],
    //   projectImage: '../../../assets/ProjectsImage/Market-admin.png',
    //   projectGithub: 'https://github.com/AbdoSakrEgy/Market-admin',
    //   projectLink: 'https://market-admin-seven.vercel.app/products',
    // },
    // {
    //   name: 'TaskManager-user',
    //   description: 'Angular CRUD app for user side.',
    //   tools: ['Angular', 'AngularMaterial', 'Tailwindcss', 'NgRx'],
    //   projectImage: '../../../assets/ProjectsImage/TaskManager-user.png',
    //   projectGithub: 'https://github.com/AbdoSakrEgy/TaskManager-user',
    //   projectLink: 'https://task-manager-user.vercel.app/login',
    // },
    // {
    //   name: 'TaskManager-admin',
    //   description: 'Angular CRUD app for admin side.',
    //   tools: ['Angular', 'AngularMaterial', 'Tailwindcss', 'NgRx'],
    //   projectImage: '../../../assets/ProjectsImage/TaskManager-admin.png',
    //   projectGithub: 'https://github.com/AbdoSakrEgy/TaskManager-admin',
    //   projectLink: 'https://taskmanager-admin.netlify.app/',
    // },
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
