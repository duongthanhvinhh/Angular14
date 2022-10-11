import { NgModule } from '@angular/core';
import { RouterLink, RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { CoursesComponent } from './courses/courses.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PracticeComponent } from './practice/practice.component';
import { MatMenuModule } from '@angular/material/menu';
import { ContactSuccessComponent } from './contact/contact-success/contact-success.component';
import { LoginsuccessComponent } from './login/loginsuccess/loginsuccess.component';
import { ReadComponent } from './blog/read/read.component';
import { DiscussComponent } from './blog/discuss/discuss.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'practice', component: PracticeComponent },
  { path: 'courses', component: CoursesComponent },
  {
    path: 'blog',
    component: BlogComponent,
    children: [
      { path: 'read', component: ReadComponent },
      { path: 'discuss', component: DiscussComponent },
    ],
  },
  {
    path: 'contact',
    component: ContactComponent,
    children: [{ path: 'contactsuccess', component: ContactSuccessComponent }],
  },
  {
    path: 'login',
    component: LoginComponent,
    children: [{ path: 'loginsuccess', component: LoginsuccessComponent }],
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
