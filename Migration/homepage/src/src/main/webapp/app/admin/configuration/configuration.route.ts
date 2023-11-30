import { Route } from '@angular/router';

import { DhppConfigurationComponent } from './configuration.component';

export const configurationRoute: Route = {
  path: '',
  component: DhppConfigurationComponent,
  data: {
    pageTitle: 'configuration.title'
  }
};
