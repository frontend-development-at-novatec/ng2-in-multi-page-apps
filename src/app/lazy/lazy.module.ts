import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyComponent } from './lazy.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LazyComponent],
  providers: [],
  bootstrap: [LazyComponent]
})
export class LazyModule {
  ngDoBootstrap() {
    console.log('test');
  }
 }
