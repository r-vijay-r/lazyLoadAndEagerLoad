import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { EagerModuleModule } from './eager-module/eager-module.module';

const appRoutes: Routes = [
{ path: '', redirectTo: 'eager', pathMatch: 'full' },
{ path: 'lazy', loadChildren: 'app/lazy-module/lazy-module.module#LazyModuleModule' }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    EagerModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }