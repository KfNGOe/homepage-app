import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import './vendor';
import { DhppbaseSharedModule } from 'app/shared/shared.module';
import { DhppbaseCoreModule } from 'app/core/core.module';
import { DhppbaseAppRoutingModule } from './app-routing.module';
// import { DhppbaseHomeModule } from './home/home.module';
import { DhppbaseEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { DhppMainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ActiveMenuDirective } from './layouts/navbar/active-menu.directive';
import { ErrorComponent } from './layouts/error/error.component';
import { App1SharedModule } from '../../../../projects/dhppapp/src/app/app.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    BrowserModule,
    DhppbaseSharedModule,
    DhppbaseCoreModule,
    // DhppbaseHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    DhppbaseEntityModule,
    DhppbaseAppRoutingModule,
    ReactiveFormsModule,
    App1SharedModule.forRoot()
  ],
  declarations: [DhppMainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent],
  bootstrap: [DhppMainComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }]
})
export class DhppbaseAppModule { }
