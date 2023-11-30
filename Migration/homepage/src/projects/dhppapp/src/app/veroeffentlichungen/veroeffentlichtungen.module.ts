import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import {AppXSharedModule} from "../app-shared.module";
import {veroeffentlichungenRoutes} from "./veroeffentlichtungen.route";
import {AppVeroeffentlichungenComponent} from "./veroeffentlichungen.component";
import {AppVeroeffentlichungenGesamtreiheComponent} from "./gesamtreihe/gesamtreihe.component";
import {AppVeroeffentlichungenUebersichtComponent} from "./uebersicht/uebersicht.component";
import {AppVeroeffentlichungenSucheComponent} from "./suche/suche.component";

const ENTITY_STATES = [...veroeffentlichungenRoutes];

@NgModule({
  declarations: [
    AppVeroeffentlichungenComponent, 
    AppVeroeffentlichungenGesamtreiheComponent, 
    AppVeroeffentlichungenUebersichtComponent, 
    AppVeroeffentlichungenSucheComponent],
  entryComponents: [AppVeroeffentlichungenComponent],
  imports: [CommonModule, AppXSharedModule, FormsModule, ReactiveFormsModule, FontAwesomeModule, NgbModule, RouterModule.forChild(ENTITY_STATES)],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class VeroeffentlichtungenModule { }
