import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { SystemJsNgModuleLoader, NgModule, ApplicationRef, Injector, NgModuleFactory, Type } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

const routes: Routes = [{ loadChildren: './lazy/lazy.module' }, { loadChildren: './lazy-two/lazy-two.module' }];

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forChild(routes)
  ],
  providers: [SystemJsNgModuleLoader]
})
export class AppModule {

  constructor(private injector: Injector, private moduleLoader: SystemJsNgModuleLoader) { }

  ngDoBootstrap(appRef: ApplicationRef) {
    const widgets = document.querySelectorAll('[data-module-path]');
    for (const i in widgets) {
      if (widgets.hasOwnProperty(i)) {
        const modulePath = widgets[i].getAttribute('data-module-path');
        if (modulePath) {
          this.moduleLoader.load(modulePath)
            .then((moduleFactory: NgModuleFactory<any>) => {
              const ngModuleRef = moduleFactory.create(this.injector);
              ngModuleRef.injector.get('components').forEach((components: Type<{}>[]) => {
                components.forEach((component: Type<{}>) => {
                  const compFactory = ngModuleRef.componentFactoryResolver.resolveComponentFactory(component);
                  if (document.querySelector(compFactory.selector)) {
                    appRef.bootstrap(compFactory);
                  }
                });
              });
            });
        }
      }
    }
  }
}
