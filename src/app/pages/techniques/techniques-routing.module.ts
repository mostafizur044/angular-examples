import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TechniquesComponent } from './techniques.component';

const routes: Routes = [
  {path: '', component: TechniquesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TechniquesRoutingModule { }
