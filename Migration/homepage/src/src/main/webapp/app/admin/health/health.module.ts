import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DhppbaseSharedModule } from 'app/shared/shared.module';

import { DhppHealthCheckComponent } from './health.component';
import { DhppHealthModalComponent } from './health-modal.component';

import { healthRoute } from './health.route';

@NgModule({
  imports: [DhppbaseSharedModule, RouterModule.forChild([healthRoute])],
  declarations: [DhppHealthCheckComponent, DhppHealthModalComponent],
  entryComponents: [DhppHealthModalComponent]
})
export class HealthModule {}
