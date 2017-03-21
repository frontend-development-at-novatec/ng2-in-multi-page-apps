import { NgModule, ModuleWithProviders } from '@angular/core';
import { LazyService } from './lazy.service';

@NgModule({})
export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [LazyService]
    };
  }
}
