import { Routes } from '@angular/router';
import { CustomDirectiveComponent } from './custom-directive/custom-directive.component';
import { FooterComponent } from './footer/footer.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { NgIfComponent } from './ng-if/ng-if.component';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';
import { PnfComponent } from './pnf/pnf.component';

export const routes: Routes = [
    {path : 'custom', component : CustomDirectiveComponent},
    {path : 'footer', component : FooterComponent},
    {path : 'ngfor', component : NgForComponent},
    {path : 'ngif', component : NgIfComponent},
    {path : 'ngswitch', component : NgSwitchComponent},
    {path : '', pathMatch : 'full', redirectTo:'/if'},
    {path :'**', component : PnfComponent}
];
