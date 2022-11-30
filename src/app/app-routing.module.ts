import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelloC1Component } from './hello-c1/hello-c1.component';
import { HelloC2Component } from './hello-c2/hello-c2.component';

const routes: Routes = [
  { path: 'hello-c1', component: HelloC1Component },
  { path: 'hello-c2', component: HelloC2Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
