import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { errorRoute } from './layouts/error/error.route';
import { navbarRoute } from './layouts/navbar/navbar.route';
import { DEBUG_INFO_ENABLED } from 'app/app.constants';

import { UserRouteAccessService } from 'app/core/auth/user-route-access-service';
import { App1SharedModule } from '../../../../projects/dhppapp/src/app/app.module';

const routes: Routes = [
  {
    path: 'app1',
    loadChildren: () => import('../../../../projects/dhppapp/src/app/app.module').then(m => m.App1SharedModule)
  },
  { path: '**', redirectTo: '/app1/one' }
];

const LAYOUT_ROUTES = [navbarRoute, ...errorRoute];

@NgModule({
  imports: [
    RouterModule.forRoot(
      [
        {
          path: 'admin',
          data: {
            authorities: ['ROLE_ADMIN']
          },
          canActivate: [UserRouteAccessService],
          loadChildren: () => import('./admin/admin-routing.module').then(m => m.AdminRoutingModule)
        },
        {
          path: 'account',
          loadChildren: () => import('./account/account.module').then(m => m.DhppbaseAccountModule)
        },
        {
          path: '',
          loadChildren: () => import('../../../../projects/dhppapp/src/app/app.module').then(m => m.App1SharedModule)
        },
        ...LAYOUT_ROUTES
      ],
      { enableTracing: DEBUG_INFO_ENABLED }
    ),
    App1SharedModule.forRoot()
  ],
  exports: [RouterModule]
})
export class DhppbaseAppRoutingModule {}
