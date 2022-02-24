import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserCreationComponent } from './user-creation.component';

const routes: Routes = [
  { path: '', children: [
    { path: 'users-creation', component: UserCreationComponent,},
    { path: 'users-creation/:id', component: UserCreationComponent,},
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserCreationRoutingModule { }
