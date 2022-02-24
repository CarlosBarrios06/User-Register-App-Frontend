import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserCreationRoutingModule } from './user-creation-routing.module';
import { UserCreationComponent } from './user-creation.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    UserCreationComponent
  ],
  imports: [
    CommonModule,
    UserCreationRoutingModule,
    SharedModule
  ]
})
export class UserCreationModule { }
