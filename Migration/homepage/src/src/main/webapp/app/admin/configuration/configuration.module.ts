import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DhppbaseSharedModule } from 'app/shared/shared.module';

import { DhppConfigurationComponent } from './configuration.component';

import { configurationRoute } from './configuration.route';

@NgModule({
  imports: [DhppbaseSharedModule, RouterModule.forChild([configurationRoute])],
  declarations: [DhppConfigurationComponent]
})
export class ConfigurationModule {}
