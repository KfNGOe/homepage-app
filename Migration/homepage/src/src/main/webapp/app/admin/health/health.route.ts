import { Route } from '@angular/router';

import { DhppHealthCheckComponent } from './health.component';

export const healthRoute: Route = {
  path: '',
  component: DhppHealthCheckComponent,
  data: {
    pageTitle: 'health.title'
  }
};
