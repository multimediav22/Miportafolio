import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () => import('./dashboard/dashboard.component'),
    children: [
      {
      path: 'Signals',
      title: 'Angular 17 Signals',
      loadComponent: () => import('./dashboard/pages/change-detection/change-detection.component'),

    },
    {
      path: 'Interacciones',
      title: 'Angular17 Interacciones',
      loadComponent: () => import('./dashboard/pages/control-flow/control-flow.component'),

    },{
      path: 'Cursos-Aprendizaje',
      title: 'Experiencia',
      loadComponent: () => import('./dashboard/pages/defer-options/defer-options.component'),

    },
    {
      path: 'Sobre mí',
      title: 'Ingeniero Multimedia',
      loadComponent: () => import('./dashboard/pages/defer-views/defer-views.component'),
    },
    {
      path: 'Proyectos',
      title: 'Freelance',
      loadComponent: () => import('./dashboard/pages/view-transition/view-transition.component'),
    },
    {
      path: 'defer-user/:id',
      title: 'User View',
      loadComponent: () => import('./dashboard/pages/defer-views/defer-views.component'),
    },
    {
      path: 'Social Network',
      title: 'Redes Sociales',
      loadComponent: () => import('./dashboard/pages/defer-users/defer-users.component'),
    },
    {
      path:'', redirectTo: 'control-flow', pathMatch: 'full',
    }
    ]
  },
    {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  }
];
