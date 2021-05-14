import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssignTestRoutingModule } from './assign-test-routing.module';
import { RouterModule } from '@angular/router';
import { NewUserComponent } from './new-user/new-user.component';
import { ChoiceComponent } from './choice/choice.component';
import { RegisteredUserComponent } from './registered-user/registered-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [NewUserComponent, ChoiceComponent, RegisteredUserComponent],
  imports: [
    CommonModule,
    AssignTestRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AssignTestModule { }
