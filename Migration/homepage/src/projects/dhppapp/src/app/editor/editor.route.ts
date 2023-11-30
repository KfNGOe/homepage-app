import { Routes } from "@angular/router";
import {AppEditorComponent} from "./editor.component";
import {AppKommissionEditPersonenComponent} from "./personen/personen.component";
import {AppKommissionEditWerkeComponent} from "./werke/werke.component";
import {AppKommissionEditEreignisseComponent} from "./ereignisse/ereignisse.component";
import {AppKommissionEditTexteComponent} from "./texte/texte.component";

export const editorRoutes: Routes = [
  { path: '', component: AppEditorComponent, pathMatch: 'prefix', children: [
      { path: '', pathMatch: 'full', redirectTo: 'personen'},
      { path: 'personen', component: AppKommissionEditPersonenComponent },
      { path: 'personen/:id', component: AppKommissionEditPersonenComponent },
      { path: 'werke', component: AppKommissionEditWerkeComponent },
      { path: 'ereignisse', component: AppKommissionEditEreignisseComponent },
      { path: 'ereignisse/:id', component: AppKommissionEditEreignisseComponent },
      { path: 'texte', component: AppKommissionEditTexteComponent },
      { path: 'texte/:id', component: AppKommissionEditTexteComponent }
    ]}
];
