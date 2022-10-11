import { NgModule } from '@angular/core';
import { RouterLink, RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { CoursesComponent } from './courses/courses.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PracticeComponent } from './practice/practice.component';
import { MatMenuModule } from '@angular/material/menu';
import { LeaveMessageSuccessComponent } from './leave-message-success/leave-message-success.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'practice', component: PracticeComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'successMessage', component: LeaveMessageSuccessComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
