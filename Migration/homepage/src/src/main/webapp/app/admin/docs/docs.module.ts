import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DhppbaseSharedModule } from 'app/shared/shared.module';

import { DhppDocsComponent } from './docs.component';

import { docsRoute } from './docs.route';

@NgModule({
  imports: [DhppbaseSharedModule, RouterModule.forChild([docsRoute])],
  declarations: [DhppDocsComponent]
})
export class DocsModule {}
