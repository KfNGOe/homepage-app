import { Routes } from "@angular/router";
import {AppVeroeffentlichungenComponent} from "./veroeffentlichungen.component";
import {AppVeroeffentlichungenGesamtreiheComponent} from "./gesamtreihe/gesamtreihe.component";
import {AppVeroeffentlichungenUebersichtComponent} from "./uebersicht/uebersicht.component";
import { AppVeroeffentlichungenSucheComponent } from "./suche/suche.component";

export const veroeffentlichungenRoutes: Routes = [
  { path: '', component: AppVeroeffentlichungenComponent, runGuardsAndResolvers: 'always', children: [
      { path: 'uebersicht', component: AppVeroeffentlichungenUebersichtComponent, runGuardsAndResolvers: 'always' },
      { path: 'suche', component: AppVeroeffentlichungenSucheComponent, runGuardsAndResolvers: 'always' },
      { path: 'suche/:', component: AppVeroeffentlichungenSucheComponent, runGuardsAndResolvers: 'always' },
      { path: 'gesamtreihe', component: AppVeroeffentlichungenGesamtreiheComponent, runGuardsAndResolvers: 'always', },
      { path: 'gesamtreihe/:id', component: AppVeroeffentlichungenGesamtreiheComponent, runGuardsAndResolvers: 'always' }
    ]}
];
