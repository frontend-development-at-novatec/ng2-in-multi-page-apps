import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { SystemJsNgModuleLoader, NgModule, ApplicationRef, ComponentFactory, ComponentFactoryResolver, Type, Compiler, Injector, ViewChild, NgModuleFactory, ModuleWithComponentFactories } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppComponentTwoComponent } from './app-component-two/app-component-two.component';

const components = [AppComponent, AppComponentTwoComponent];
const routes: Routes = [{ path: "", loadChildren: "./lazy/lazy.module" }]

@NgModule({
  declarations: [
    AppComponent,
    AppComponentTwoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forChild(routes)
  ],
  providers: [SystemJsNgModuleLoader],
  entryComponents: [AppComponent, AppComponentTwoComponent]
})
export class AppModule {

  private moduleFactory: any;

  constructor(private resolver: ComponentFactoryResolver, private compiler: Compiler, private injector: Injector, private moduleLoader: SystemJsNgModuleLoader) { }

  ngDoBootstrap(appRef: ApplicationRef) {
    // initialize non lazy components
    components.forEach((componentDef: Type<{}>) => {
      console.log("componentDef", componentDef);
      const factory = this.resolver.resolveComponentFactory(componentDef);
      if (document.querySelector(factory.selector)) {
        appRef.bootstrap(factory);
      }
    });
    // TODO: load only if needed.
    this.moduleLoader.load('./lazy/lazy.module#LazyModule')
      .then((moduleFactory: NgModuleFactory<any>) => {
        const ngModuleRef = moduleFactory.create(this.injector);
        const componentsInjects = ngModuleRef.injector.get("components") as any[];
        console.log("componentsInjects", componentsInjects);
        componentsInjects.forEach((components: Type<{}>[]) => {
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