import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './public/error/not-found/not-found.component';
import { HomeComponent } from './public/home/home.component';

const routes: Routes = [
  { path: "home", component: HomeComponent },

  { path: "", pathMatch: "full", redirectTo: "/home" },
  {
    path: 'users',
    loadChildren: () => import('./modules/user-creation/user-creation.module').then(m => m.UserCreationModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./modules/user-dashboard/user-dashboard.module').then(m => m.UserDashboardModule)
  },
  { path: "**", component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
