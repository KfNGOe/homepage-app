import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {AppXSharedModule} from "../app-shared.module";
import {editorRoutes} from "./editor.route";
import {AppEditorComponent} from "./editor.component";
import {AppKommissionEditPersonenComponent} from "./personen/personen.component";
import {AppKommissionEditWerkeComponent} from "./werke/werke.component";
import {AppKommissionEditEreignisseComponent} from "./ereignisse/ereignisse.component";
import {AppKommissionEditTexteComponent} from "./texte/texte.component";
import { EditorModule, TINYMCE_SCRIPT_SRC } from '@tinymce/tinymce-angular';

const ENTITY_STATES = [...editorRoutes];

@NgModule({
  declarations: [AppKommissionEditPersonenComponent, AppKommissionEditWerkeComponent, AppKommissionEditEreignisseComponent, AppKommissionEditTexteComponent, AppEditorComponent],
  entryComponents: [AppEditorComponent],
  imports: [CommonModule, AppXSharedModule, FormsModule, ReactiveFormsModule, FontAwesomeModule, EditorModule, RouterModule.forChild(ENTITY_STATES)],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    { provide: TINYMCE_SCRIPT_SRC, useValue: 'content/tinymce/tinymce.min.js' }
  ]
})
export class XEditorModule { }
