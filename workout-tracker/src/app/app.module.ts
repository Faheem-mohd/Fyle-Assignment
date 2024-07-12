import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'; // Ensure this import

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module'; // Assuming you have AppRoutingModule for routing

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule, // Make sure RouterModule is imported here
    AppRoutingModule // Your AppRoutingModule that includes routing configuration
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
