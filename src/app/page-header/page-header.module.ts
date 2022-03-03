import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzTagModule } from 'ng-zorro-antd/tag';

import { SharedModule } from '../shared.module';

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
    NzTagModule,
  ],
})
export class PageHeaderModule {}
