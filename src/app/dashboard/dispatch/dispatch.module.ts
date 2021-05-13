import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DispatchRoutingModule } from './dispatch-routing.module';
import { DispatchComponent } from './dispatch.component';


@NgModule({
  declarations: [DispatchComponent],
  imports: [
    CommonModule,
    DispatchRoutingModule
  ]
})
export class DispatchModule { }
