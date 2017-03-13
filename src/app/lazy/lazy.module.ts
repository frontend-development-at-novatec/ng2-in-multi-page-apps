import { NgModule, ANALYZE_FOR_ENTRY_COMPONENTS, OpaqueToken } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyComponent } from './lazy.component';
import { RouterModule } from '@angular/router'


export const test = LazyComponent;

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [LazyComponent],
  providers: [
    // { provide: ANALYZE_FOR_ENTRY_COMPONENTS, useValue: [LazyComponent], multi: true },
    { provide: "components", useValue: [{selector: "app-lazy", component: LazyComponent}], multi: true }
  ],
  entryComponents: [LazyComponent]
})
export class LazyModule { }
