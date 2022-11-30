import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { DisplayJSONComponent } from './display-json/display-json.component';
import { AceEditorModule } from 'ng12-ace-editor';
import { NgxJsonViewerModule } from 'ngx-json-viewer';
import { HelloC1Component } from './hello-c1/hello-c1.component';
import { HelloC2Component } from './hello-c2/hello-c2.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    MoviesListComponent,
    DisplayJSONComponent,
    HelloC1Component,
    HelloC2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AceEditorModule,
    NgxJsonViewerModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
