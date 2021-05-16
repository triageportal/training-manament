import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewProgressRoutingModule } from './view-progress-routing.module';
import { CanceledComponent } from './canceled/canceled.component';
import { CompletedComponent } from './completed/completed.component';
import { InprogressComponent } from './inprogress/inprogress.component';
import { PendingComponent } from './pending/pending.component';
import { ViewProgressComponent } from './view-progress.component';


@NgModule({
  declarations: [CanceledComponent, CompletedComponent, InprogressComponent, PendingComponent, ViewProgressComponent],
  imports: [
    CommonModule,
    ViewProgressRoutingModule
  ]
})
export class ViewProgressModule { }
