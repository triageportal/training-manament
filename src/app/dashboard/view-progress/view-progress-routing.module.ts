import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewProgressComponent } from './view-progress.component';

const routes: Routes = [{ path: '', component: ViewProgressComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewProgressRoutingModule { }
