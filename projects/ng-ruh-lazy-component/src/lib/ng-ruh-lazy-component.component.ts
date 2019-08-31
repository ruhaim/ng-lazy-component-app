import { Component, OnInit, NgModuleFactoryLoader, SystemJsNgModuleLoader, 
        Injector, Input, ViewContainerRef, ViewChild, ComponentFactory, 
        Type, ComponentRef, NgModuleFactory } from '@angular/core';
import { ComponentFactoryResolver, NgModuleRef } from '@angular/core';
import { Observable } from 'rxjs';
@Component({
  selector: 'ng-ruh-lazy-component',
  template: `
    <ng-content *ngIf="isLoading" select="[loading]">
    </ng-content>
    <ng-content *ngIf="error" select="[error]">
    </ng-content>
    <ng-container #vcRef></ng-container>
  `,
  styles: [],
  providers: [
    { provide: NgModuleFactoryLoader, 
      useClass: SystemJsNgModuleLoader }
  ]
})
export class NgRuhLazyComponentComponent implements OnInit {

  moduleFactory:NgModuleFactory<any>;

  compType: Type<any>;
  compRef : ComponentRef<any>;
  componentData :any
  isLoading : boolean
  error = null

  @ViewChild("vcRef", {read: ViewContainerRef}) vcRef:ViewContainerRef;

  @Input()
  set modulePath(value: string) {
      this.loadModule(value)
  }
  @Input()
  set componentPath(value: string) {
    const [modulePath, moduleName, componentName] = value.split("#")
    this.loadModule(`${modulePath}#${moduleName}`, componentName)
  }

  @Input()
  set data(value: object) {
      this.componentData = value;
      if(this.compRef.instance){
        this.compRef.instance.data = value;
      }

      // this.loadModule(`${modulePath}#${moduleName}`)
  }

  constructor(
    private factoryLoader:NgModuleFactoryLoader,
    private injector:Injector,
    private cfr:ComponentFactoryResolver  ) { }
  ngOnInit() {


  }

  resolveCompType(moduleType, compName:string){
    let compType=undefined
    
    compType = moduleType.componentMap && moduleType.componentMap[compName]

    if(!compType){
      compType = moduleType.getComponentEntry && moduleType.getComponentEntry(compName)

    }

    if(!compType){
      throw new Error(
        `A component reference was not found mapped to requested string '${compName}',
        make sure the lazy loaded module implements a static 'componentMap' or
        'getComponentEntry(compName)' on the module root `)
    }

    return compType;
  }
  async loadModule(path:string, compName=""){
    try{

      this.isLoading = true
      // Child module factory.
      this.moduleFactory = await this.factoryLoader.load(path)
      
      // Child module reference.
      const module:NgModuleRef<any>=this.moduleFactory.create(this.injector);
  
      let moduleInstance = module.instance
      const moduleType = <any>this.moduleFactory.moduleType
      this.compType=this.resolveCompType(moduleType, compName)
  
      //this.childType=module.instance.getEntry();
  
      let componentFactory:ComponentFactory<any>=module.componentFactoryResolver
          .resolveComponentFactory(this.compType);
      
      // // Child component reference.
      this.compRef=componentFactory.create(this.injector);
      this.compRef.instance.data = this.componentData;
      // // Inserting a child component into the view.
      this.vcRef.clear()
      this.vcRef.insert(this.compRef.hostView);
      this.isLoading = false
    }catch(err){
      this.error = err
      throw err
    }finally{
      this.isLoading = false
    }







  }

}
