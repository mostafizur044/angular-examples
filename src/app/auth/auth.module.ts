import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { Routes, RouterModule } from '@angular/router';

const route: Routes = [
  {path: '', component: AuthComponent}
];

@NgModule({
  declarations: [AuthComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(route)
  ]
})
export class AuthModule { }
