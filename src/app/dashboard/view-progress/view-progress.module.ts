import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewProgressRoutingModule } from './view-progress-routing.module';
import { ViewProgressComponent } from './view-progress.component';


@NgModule({
  declarations: [ViewProgressComponent],
  imports: [
    CommonModule,
    ViewProgressRoutingModule
  ]
})
export class ViewProgressModule { }
