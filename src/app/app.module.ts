import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef, ComponentFactory, ComponentFactoryResolver, Type, Compiler, Injector, ViewChild} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppComponentTwoComponent } from './app-component-two/app-component-two.component';

const components = [AppComponent, AppComponentTwoComponent];

@NgModule({
  declarations: [
    AppComponent,
    AppComponentTwoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  entryComponents: components,
  providers: []
})
export class AppModule {

  private moduleFactory: any;

  @ViewChild('app-lazy') lazy: ViewChild;

  constructor(private resolver: ComponentFactoryResolver, private compiler: Compiler, private injector: Injector) {
    let loadedModule = require('./lazy/lazy.module')['LazyModule'];
    let cMAACA = this.compiler.compileModuleAndAllComponentsAsync(loadedModule);
    console.log(cMAACA);

    cMAACA.then(x => x.componentFactories.forEach(cF => {
      if(document.querySelector(cF.selector)) {
        cF.create(injector);
      }
    }));
  }

  ngDoBootstrap(appRef: ApplicationRef) {
    components.forEach((componentDef: Type<{}>) => {
      const factory = this.resolver.resolveComponentFactory(componentDef);
      if (document.querySelector(factory.selector)) {
        appRef.bootstrap(factory);
      }
    });
  }
}