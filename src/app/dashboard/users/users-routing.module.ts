import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserSearchComponent } from './user-search/user-search.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserUpdateComponent } from './user-update/user-update.component';

const routes: Routes = [
  { 
    path: '', 
    children: [
      {
        path: '',
        redirectTo: 'usersearch',
        pathMatch: 'full'
      },
      {
        path: 'usersearch',
        component: UserSearchComponent
      },
      {
        path: 'userdetails',
        component: UserDetailsComponent
      },
      {
        path: 'userupdate',
        component: UserUpdateComponent
      },
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
