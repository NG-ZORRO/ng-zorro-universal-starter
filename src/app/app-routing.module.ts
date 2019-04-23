import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'table', pathMatch: 'full' },
  { path: 'table', loadChildren: './table/table.module#TableModule' },
  { path: 'form', loadChildren: './form/form.module#FormModule' },
  { path: 'page-header', loadChildren: './page-header/page-header.module#PageHeaderModule' },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
