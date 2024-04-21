import { Routes } from '@angular/router';
import { BuiltInPipeComponent } from './built-in-pipe/built-in-pipe.component';
import { ChainingPipeComponent } from './chaining-pipe/chaining-pipe.component';
import { CustomPipeComponent } from './custom-pipe/custom-pipe.component';
import { ParameterisedPipeComponent } from './parameterised-pipe/parameterised-pipe.component';
import { PnfComponent } from './pnf/pnf.component';
import { AssignmentComponent } from './assignment/assignment.component';

export const routes: Routes = [
    {path : 'built', component : BuiltInPipeComponent},
    {path : 'chaining', component : ChainingPipeComponent},
    {path : 'custom', component : CustomPipeComponent},
    {path : 'parametrised', component : ParameterisedPipeComponent},
    {path : 'assignment', component : AssignmentComponent},
    {path : '**', component : PnfComponent},
    {path : '', pathMatch : 'full', redirectTo : '/built'},
];
