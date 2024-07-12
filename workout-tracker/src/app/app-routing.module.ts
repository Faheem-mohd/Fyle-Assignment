import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent }
  // Add other routes as needed
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes) // Ensure forRoot() is used in the root module
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
