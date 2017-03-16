import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { SystemJsNgModuleLoader, NgModule, ApplicationRef, ComponentFactory, ComponentFactoryResolver, Type, Compiler, Injector, ViewChild, NgModuleFactory, ModuleWithComponentFactories } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

const routes: Routes = [{ path: "/lazy", loadChildren: "./lazy/lazy.module" },{ path: "/lazy-two", loadChildren: "./lazy-two/lazy-two.module" }]

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forChild(routes)
  ],
  providers: [SystemJsNgModuleLoader],
  entryComponents: []
})
export class AppModule {

  private moduleFactory: any;

  constructor(private resolver: ComponentFactoryResolver, private compiler: Compiler, private injector: Injector, private moduleLoader: SystemJsNgModuleLoader) { }

  ngDoBootstrap(appRef: ApplicationRef) {
    // load only in the case it's needed.
    // TODO: load in parallel?!
    let modules = document.querySelectorAll("[data-module]");
    for (let i in modules) if (modules.hasOwnProperty(i)) {
      let module = modules[i].getAttribute('data-module');
      let file = modules[i].getAttribute('data-module-file');
      if (file && module) {
        this.moduleLoader.load(file + '#' + module)
          .then((moduleFactory: NgModuleFactory<any>) => {
            const ngModuleRef = moduleFactory.create(this.injector);
            const componentsInjects = ngModuleRef.injector.get("components") as any[];
            //console.log("componentsInjects", componentsInjects);
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


  }
}