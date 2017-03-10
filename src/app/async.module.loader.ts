import { Injectable, Compiler, NgModuleFactory, NgModuleFactoryLoader } from '@angular/core';
 
@Injectable()
export class NinjaModuleFactoryLoader implements NgModuleFactoryLoader {
 
    constructor(private compiler: Compiler) {
    }
 
    load(path: string): Promise<NgModuleFactory<any>> {
 
        let loadedModule = require(path);
        if (!loadedModule) {
            throw new Error(`Cannot find`);
        }
 
        return this.compiler.compileModuleAsync(loadedModule);
    }
 
}
