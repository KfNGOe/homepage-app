import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DhppbaseSharedModule } from 'app/shared/shared.module';

import { DhppMetricsMonitoringComponent } from './metrics.component';

import { metricsRoute } from './metrics.route';

@NgModule({
  imports: [DhppbaseSharedModule, RouterModule.forChild([metricsRoute])],
  declarations: [DhppMetricsMonitoringComponent]
})
export class MetricsModule {}
