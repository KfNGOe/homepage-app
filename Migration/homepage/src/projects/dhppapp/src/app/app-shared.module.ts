import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { RdfInstancePipe, SeealsoPipe, ToggleNavbarComponent } from 'app/shared/base.imports';
import { CommonModule } from '@angular/common';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatChipsModule } from '@angular/material/chips';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTreeModule } from '@angular/material/tree';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { SafeHtmlPipe } from './safehtml.pipe';
import { DhppListingStyle1Component } from './shared/listing-style-1/listing-style-1.component';
import { DhppListingStyle2Component } from './shared/listing-style-2/listing-style-2.component';
import { DhppListingStyle3Component } from './shared/listing-style-3/listing-style-3.component';
import { DhppListingStyle4Component } from './shared/listing-style-4/listing-style-4.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoaderComponent } from './shared/loader/loader.component';

@NgModule({
  declarations: [
    ToggleNavbarComponent,
    RdfInstancePipe,
    SeealsoPipe,
    SafeHtmlPipe,
    DhppListingStyle1Component,
    DhppListingStyle2Component,
    DhppListingStyle3Component,
    DhppListingStyle4Component,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    MatSlideToggleModule,
    MatExpansionModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatChipsModule,
    MatAutocompleteModule,
    MatTabsModule,
    MatTreeModule,
    MatProgressBarModule,
    FontAwesomeModule
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    ToggleNavbarComponent,
    RdfInstancePipe,
    SeealsoPipe,
    SafeHtmlPipe,
    DhppListingStyle1Component,
    DhppListingStyle2Component,
    DhppListingStyle3Component,
    DhppListingStyle4Component,
    LoaderComponent
  ]
})
export class AppXSharedModule {}
