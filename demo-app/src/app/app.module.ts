import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HelloComponent} from "./hello.component"
import { PersonComponent } from './person.component';
import { SecondComponent } from './second.component';
@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    SecondComponent,
    PersonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
