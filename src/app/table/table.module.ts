import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzDividerModule, NzTableModule } from 'ng-zorro-antd'
import { TableComponent } from './table.component';
import { TableRoutingModule } from './table-routing.module'

@NgModule({
  declarations: [TableComponent],
  imports: [
    CommonModule,
    TableRoutingModule,
    NzTableModule,
    NzDividerModule
  ]
})
export class TableModule { }
