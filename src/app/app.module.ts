import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalComponent } from './Calculator/cal/cal.component';

@NgModule({
  declarations: [
    AppComponent,
    CalComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
