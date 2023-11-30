import { Route } from '@angular/router';

import { DhppMetricsMonitoringComponent } from './metrics.component';

export const metricsRoute: Route = {
  path: '',
  component: DhppMetricsMonitoringComponent,
  data: {
    pageTitle: 'metrics.title'
  }
};
