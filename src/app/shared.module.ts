import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzButtonModule, NzGridModule, NzIconModule, NzLayoutModule, NzMenuModule } from 'ng-zorro-antd';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    NzLayoutModule,
    NzMenuModule,
    NzButtonModule,
    NzIconModule,
    NzGridModule
  ]
})
export class SharedModule { }
