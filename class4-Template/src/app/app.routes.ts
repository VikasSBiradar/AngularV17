import { Routes } from '@angular/router';
import { TemplateComponent } from './component/template/template.component';
import { TwoWayBindingComponent } from './component/two-way-binding/two-way-binding.component';
import { PnfComponent } from './component/pnf/pnf.component';

export const routes: Routes = [
    {path: 'ref', component : TemplateComponent},
    {path: 'twoWayBinding', component : TwoWayBindingComponent},
    {path: '',  pathMatch : 'full',redirectTo : '/ref'},
    {path : '**', component : PnfComponent}
];
