import { Routes } from "@angular/router";
import {AppKommissionComponent} from "./kommission.component";
import {AppKommissionGeschichteComponent} from "./geschichte/geschichte.component";
import {AppKommissionMitgliederComponent} from "./mitglieder/mitglieder.component";

export const kommissionRoutes: Routes = [
  { path: '', component: AppKommissionComponent, pathMatch: 'prefix', children: [
      { path: 'geschichte', component: AppKommissionGeschichteComponent },
      { path: 'mitglieder', component: AppKommissionMitgliederComponent }
    ]}
];
