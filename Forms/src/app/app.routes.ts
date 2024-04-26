import { Routes } from '@angular/router';
import { StaticFormsComponent } from './components/static-forms/static-forms.component';
import { DynamicFormsComponent } from './components/dynamic-forms/dynamic-forms.component';
import { PnfComponent } from './components/pnf/pnf.component';

export const routes: Routes = [
    {path : 'static', component : StaticFormsComponent},
    {path : 'dynamic', component : DynamicFormsComponent},
    {path:'', pathMatch : 'full', redirectTo : '/static'},
    {path:'**', component : PnfComponent}
];
