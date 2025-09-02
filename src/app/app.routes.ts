import { Routes } from '@angular/router'

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home').then(m => m.Home)
  },
  {
    path: 'about',
    loadChildren: () => import('./features/about/about.routes').then(m => m.ABOUT_ROUTES)
  },
  {
    path: 'projects',
    loadChildren: () => import('./features/projects/projects.routes').then(m => m.PROJECTS_ROUTES)
  },
  {
    path: 'contact',
    loadComponent: () => import('./features/contact/contact').then(m => m.Contact)
  },
  {
    path: '**',
    redirectTo: ''
  }
]
