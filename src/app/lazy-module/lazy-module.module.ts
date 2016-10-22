import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyModuleComponent } from './lazy-module.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: '', component: LazyModuleComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LazyModuleComponent]
})
export class LazyModuleModule { }
