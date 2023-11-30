import { Route } from '@angular/router';

import { DhppDocsComponent } from './docs.component';

export const docsRoute: Route = {
  path: '',
  component: DhppDocsComponent,
  data: {
    pageTitle: 'global.menu.admin.apidocs'
  }
};
