import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  { 
    path: '', 
    component: DashboardComponent,
    children: [
      {
        path: '',
        redirectTo: 'dispatch',
        pathMatch: 'full'
      },
      { 
        path: 'dispatch', 
        loadChildren: () => import('./dispatch/dispatch.module').then(m => m.DispatchModule) 
      },
      { 
        path: 'assign-test', 
        loadChildren: () => import('./assign-test/assign-test.module').then(m => m.AssignTestModule) 
      },
      { 
        path: 'view-progress', 
        loadChildren: () => import('./view-progress/view-progress.module').then(m => m.ViewProgressModule) 
      },
      { 
        path: 'users', 
        loadChildren: () => import('./users/users.module').then(m => m.UsersModule) 
      },
      { 
        path: 'checklists', 
        loadChildren: () => import('./checklists/checklists.module').then(m => m.ChecklistsModule) 
      }, 
    ] 
  },
  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
