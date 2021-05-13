import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChoiceComponent } from './choice/choice.component';
import { NewUserComponent } from './new-user/new-user.component';
import { RegisteredUserComponent } from './registered-user/registered-user.component';

const routes: Routes = [
  { 
    path: '', 
    children: [
      {
        path: '',
        redirectTo: 'choice',
        pathMatch: 'full'
      },
      {
        path: 'choice',
        component: ChoiceComponent
      },
      {
        path: 'newuser',
        component: NewUserComponent
      },
      {
        path: 'registereduser',
        component: RegisteredUserComponent
      },
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssignTestRoutingModule { }
