import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const AppRoutes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'signin',
    loadChildren: './modules/login/login.module#LoginModule'
  },
  {
    path: 'home',
    loadChildren: ''
  },
  {
      path: 'resetpassword',
      loadChildren: ''
  }
];