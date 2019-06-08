import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SmsComponent } from './sms/sms.component';
import { GoogleMapComponent } from './google-map/google-map.component';
import { LocalForecastComponent } from './local-forecast/local-forecast.component';
import { BlogPostComponent } from './blog-post/blog-post.component';

const routes: Routes = [
  { path: 'contact', component: ContactComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'sms', component: SmsComponent },
  { path: 'google-map', component: GoogleMapComponent },
  { path: 'local-forecast', component: LocalForecastComponent },
  { path: 'blog-post', component: BlogPostComponent},
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
