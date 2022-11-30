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
import { ComponentOneComponent } from './component-one/component-one.component';
import { ComponentTwoComponent } from './component-two/component-two.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    MoviesListComponent,
    DisplayJSONComponent,
    ComponentOneComponent,
    ComponentTwoComponent
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
