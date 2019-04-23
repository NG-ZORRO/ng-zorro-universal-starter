import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageHeaderActionsComponent } from './page-header-actions.component'

const routes: Routes = [
  { path: '', redirectTo: 'page-header-actions', pathMatch: 'full' },
  { path: '', component: PageHeaderActionsComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageHeaderRoutingModule { }
