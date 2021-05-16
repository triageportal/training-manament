import { ViewProgressComponent } from './view-progress.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompletedComponent } from './completed/completed.component';
import { InprogressComponent } from './inprogress/inprogress.component';
import { PendingComponent } from './pending/pending.component';
import { CanceledComponent } from './canceled/canceled.component';



const routes: Routes = [{
  path: '',
  component: ViewProgressComponent,
  children: [
    {
      path: '',
      redirectTo: 'completed',
      pathMatch: 'full'
    },
    {
      path: 'completed',
      component: CompletedComponent
    },
    {
      path: 'inprogress',
      component: InprogressComponent
    },
    {
      path: 'pending',
      component: PendingComponent
    },
    {
      path: 'canceled',
      component: CanceledComponent
    },
  ]
 }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewProgressRoutingModule { }
