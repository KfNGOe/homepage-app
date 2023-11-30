import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppImpressumComponent } from './impressum/impressum.component';
import { AppDatenschutzComponent } from './datenschutz/datenschutz.component';
import { AppHomeComponent } from './home/home.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DhppNavbarComponent } from './shared/navbar/navbar.component';
import { DhppFooterComponent } from './shared/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AppXSharedModule} from "./app-shared.module";
import {MatTabsModule} from "@angular/material/tabs";
import { LightboxModule } from 'ngx-lightbox';

import '../web-components/Demo';
import {AppAktuellesComponent} from "./aktuelles/aktuelles.component";
import {DhppSidebarComponent} from "./shared/sidebar/sidebar.component";
import {SidebarService} from "./shared/sidebar.service";
import {DataService} from "./shared/data.service";
import {DhPlusService} from "./shared/dhplus.service";
import {DhPlusFnService} from "./shared/dhplusfn.service";
import {AppProjekteComponent} from "./projekte/projekte.component";
import {DhppSidebarRightComponent} from "./shared/sidebar-right/sidebar-right.component";

import 'web-component-essentials';
import '../assets/js/dhpc-metadata-editor';

@NgModule({
  declarations: [
    AppComponent,
    AppHomeComponent,
    AppImpressumComponent,
    AppDatenschutzComponent,
    AppAktuellesComponent,
    AppProjekteComponent,
    DhppNavbarComponent,
    DhppFooterComponent,
    DhppSidebarRightComponent,
    DhppSidebarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    FontAwesomeModule, AppXSharedModule, MatTabsModule,
    LightboxModule
  ],
  exports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [SidebarService, DataService, DhPlusService, DhPlusFnService],
  bootstrap: [AppComponent]
})
export class AppModule { }

@NgModule({})
export class App1SharedModule {
  static forRoot(): ModuleWithProviders<AppModule> {
    return {
      ngModule: AppModule,
      providers: []
    }
  }
}
