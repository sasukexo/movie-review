import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ServiceDetailsComponent } from './pages/home/service-details/service-details.component';
import { EnquiriesComponent } from './pages/enquiries/enquiries.component';
import { LoginComponent } from './common/login/login.component';
import { enquiryGuard } from './guards/enquiry.guard';
import { EnquiryFormComponent } from './pages/home/enquiry-form/enquiry-form.component';
import { MovieFormComponent } from './component/movie-form/movie-form.component';
import { MovieListComponent } from './component/movie-list/movie-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'form', component: EnquiryFormComponent },
  { path: 'movies', component: MovieListComponent },
  { path: 'add-movie', component: MovieFormComponent, canActivate: [enquiryGuard] }, 

  { path: 'login', component: LoginComponent },
  { path: 'services/:id', component: ServiceDetailsComponent },
  { path: 'enquiries', component: EnquiriesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
