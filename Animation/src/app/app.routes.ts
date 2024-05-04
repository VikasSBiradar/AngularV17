import { Routes } from '@angular/router';
import { Animation1Component } from './components/animation1/animation1.component';
import { Animation2Component } from './components/animation2/animation2.component';
import { Animation3Component } from './components/animation3/animation3.component';
import { PnfComponent } from './components/pnf/pnf.component';

export const routes: Routes = [
    {path : 'animation1', component : Animation1Component},
    {path : 'animation2', component : Animation2Component},
    {path : 'animation2', component : Animation3Component},
    {path :'', pathMatch:'full', redirectTo:'animation1'},
    {path:'**', component : PnfComponent}
];
