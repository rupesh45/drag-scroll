import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DragScrollModule } from 'simple-drag-scroll';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
 