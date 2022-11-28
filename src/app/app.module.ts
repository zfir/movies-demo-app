import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { DisplayJSONComponent } from './display-json/display-json.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    MoviesListComponent,
    DisplayJSONComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
