import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';

const routes: Routes = [  { path: 'about', component: AboutComponent }, //localhost:4200/about will navigate to about component
  { path: 'home', component: HomeComponent }, //localhost:4200/home will navigate to home component
    { path: 'templateform', component: TemplateDrivenFormComponent }, //If path not found, navigate to home
  { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
