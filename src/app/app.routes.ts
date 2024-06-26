import { Routes } from '@angular/router'

import { HomePageComponent } from './pages/home-page/home-page.component'

import { AuthPageLayoutComponent } from './features/auth/pages/auth-page-layout/auth-page-layout.component'
import { LoginPageComponent } from './features/auth/pages/login-page/login-page.component'
import { RegisterPageComponent } from './features/auth/pages/register-page/register-page.component'

import { EstablishmentDetailsPageComponent } from './features/establishment/pages/establishment-details-page/establishment-details-page.component'

import { EstablishmentManagerPageComponent } from './features/reservation/pages/establishment-manager-page/establishment-manager-page.component'

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'establishments/:establishmentId',
    component: EstablishmentDetailsPageComponent
  },
  {
    path: 'r/manager',
    component: EstablishmentManagerPageComponent
  },
  {
    path: 'auth',
    component: AuthPageLayoutComponent,
    children: [
      {
        path: 'login',
        component: LoginPageComponent
      },
      {
        path: 'register',
        component: RegisterPageComponent
      }
    ]
  }
]
