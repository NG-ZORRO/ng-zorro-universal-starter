import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import {
  NzCheckboxModule,
  NzFormModule,
  NzGridModule,
  NzInputModule,
  NzSelectModule,
  NzToolTipModule
} from 'ng-zorro-antd'
import { SharedModule } from '../shared.module'
import { FormRoutingModule } from './form-routing.module'
import { FormComponent } from './form.component';

@NgModule({
  declarations: [FormComponent],
  imports: [
    CommonModule,
    FormRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    NzFormModule,
    NzInputModule,
    NzCheckboxModule,
    NzSelectModule,
    NzToolTipModule
  ]
})
export class FormModule { }
