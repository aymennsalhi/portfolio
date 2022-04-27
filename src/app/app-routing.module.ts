import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';

const routes: Routes = [
  { 
    path: 'home', 
    component: HomeLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./portfolio/portfolio.module').then(m => m.PortfolioModule) 
      }
    ]
  },
 
  { 
    path: 'contact', 
    component: HomeLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./contact-me/contact-me.module').then(m => m.ContactMeModule)
      }
    ]
  },
  { 
    path: 'all-skills', 
    component: HomeLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./portfolio/all-skills/all-skills.module').then(m => m.AllSkillsModule)
      }
    ]
  },
  { 
    path: 'all-services', 
    component: HomeLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./portfolio/all-services/all-services.module').then(m => m.AllServicesModule)
      }
    ]
  },
  { 
    path: 'all-projects', 
    component: HomeLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./portfolio/all-projects/all-projects.module').then(m => m.AllProjectsModule)
      }
    ]
  },

  { 
    path: 'technologies', 
    component: HomeLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./technologies/technologies.module').then(m => m.TechnologiesModule)
      }
    ]
  },
  { 
    path: 'technologies/:tech', 
    component: HomeLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./technologies/tech-item/tech-item.module').then(m => m.TechItemModule)
      }
    ]
  },


  { 
    path: 'bundles', 
    component: HomeLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./bundles/bundles.module').then(m => m.BundlesModule)
      }
    ]
  },
  { 
    path: 'bundles/:tech', 
    component: HomeLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./bundles/bundle-item/bundle-item.module').then(m => m.BundleItemModule)
      }
    ]
  },

  { 
    path: 'login/:cin', 
    component: HomeLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./auth/login/login.module').then(m => m.LoginModule)
      }
    ]
  },
  { 
    path: 'verif-login', 
    component: HomeLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./auth/verif-login/verif-login.module').then(m => m.VerifLoginModule)
      }
    ]
  },



  { 
    path: 'admin/profile', 
    component: HomeLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./admin/profile/profile.module').then(m => m.ProfileModule)
      }
    ]
  },
  { 
    path: 'admin/dashboard', 
    component: HomeLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./admin/dashboard/dashboard.module').then(m => m.DashboardModule)
      }
    ]
  },
    
  
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      anchorScrolling: 'enabled',
      scrollPositionRestoration: 'enabled'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
