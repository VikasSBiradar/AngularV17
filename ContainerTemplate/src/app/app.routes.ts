import { Routes } from '@angular/router';
import { ContainerComponent } from './components/container/container.component';
import { TemplateComponent } from './components/template/template.component';
import { ContentComponent } from './components/content/content.component';
import { PnfComponent } from './components/pnf/pnf.component';

export const routes: Routes = [
    {path : "container", component : ContainerComponent},
    {path : "template", component : TemplateComponent},
    {path : "content",component : ContentComponent},
    {path : "**", component : PnfComponent},
    {path :"", pathMatch :"full", redirectTo :"container"}
];
