import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {AppXSharedModule} from "../app-shared.module";
import {kommissionRoutes} from "./kommission.route";
import {AppKommissionComponent} from "./kommission.component";
import {AppKommissionGeschichteComponent} from "./geschichte/geschichte.component";
import {AppKommissionMitgliederComponent} from "./mitglieder/mitglieder.component";

const ENTITY_STATES = [...kommissionRoutes];

@NgModule({
  declarations: [AppKommissionGeschichteComponent, AppKommissionComponent, AppKommissionMitgliederComponent],
  entryComponents: [AppKommissionComponent],
  imports: [CommonModule, AppXSharedModule, FormsModule, ReactiveFormsModule, FontAwesomeModule, RouterModule.forChild(ENTITY_STATES)],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class KommissionModule { }
