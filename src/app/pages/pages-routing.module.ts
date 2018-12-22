import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  {path: '', component: PagesComponent, children: [
    {path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule'},
    {path: 'components', loadChildren: './components/components.module#ComponentsModule'},
    {path: 'forms', loadChildren: './forms/forms.module#FormsModule'},
    {path: 'http-client', loadChildren: './http-client/http-client.module#HttpClientModule'},
    {path: 'router', loadChildren: './router/router.module#RouterModule'},
    {path: 'techniques', loadChildren: './techniques/techniques.module#TechniquesModule'},
    {path: '**', redirectTo: 'dashboard'}
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
