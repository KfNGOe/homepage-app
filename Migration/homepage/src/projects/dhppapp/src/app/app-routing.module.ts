import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppHomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { AppAktuellesComponent } from './aktuelles/aktuelles.component';
import { AppProjekteComponent } from './projekte/projekte.component';
import { AppImpressumComponent } from './impressum/impressum.component';
import { AppDatenschutzComponent } from './datenschutz/datenschutz.component';

// Add your routes here!
// https://angular.io/guide/router
const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      { path: '', pathMatch: 'prefix', redirectTo: 'home' },
      { path: 'home', component: AppHomeComponent },
      { path: 'impressum', component: AppImpressumComponent },
      { path: 'datenschutz', component: AppDatenschutzComponent },
      { path: 'aktuelles', component: AppAktuellesComponent },
      { path: 'aktuelles/:id', component: AppAktuellesComponent },
      { path: 'projekte', component: AppProjekteComponent },
      { path: 'projekte/:id', component: AppProjekteComponent },
      {
        path: 'veroeffentlichungen',
        loadChildren: () => import('./veroeffentlichungen/veroeffentlichtungen.module').then(m => m.VeroeffentlichtungenModule),
        runGuardsAndResolvers: 'always'
      },
      {
        path: 'kommission',
        loadChildren: () => import('./kommission/kommission.module').then(m => m.KommissionModule),
        runGuardsAndResolvers: 'always'
      },
      {
        path: 'editor',
        loadChildren: () => import('./editor/editor.module').then(m => m.XEditorModule),
        runGuardsAndResolvers: 'always'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled', onSameUrlNavigation: 'reload', relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
