import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzPageHeaderModule, NzTabsModule, NzTagModule } from 'ng-zorro-antd'
import { SharedModule } from '../shared.module'

import { PageHeaderRoutingModule } from './page-header-routing.module';
import { PageHeaderActionsComponent } from './page-header-actions.component';

@NgModule({
  declarations: [PageHeaderActionsComponent],
  imports: [
    CommonModule,
    PageHeaderRoutingModule,
    SharedModule,
    NzPageHeaderModule,
    NzTabsModule,
    NzTagModule

  ]
})
export class PageHeaderModule { }
