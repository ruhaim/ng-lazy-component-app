import { Component, OnInit, NgModuleFactoryLoader, SystemJsNgModuleLoader, Injector, Input, ViewContainerRef, ViewChild, ComponentFactory, Type, ComponentRef } from '@angular/core';
import { ComponentFactoryResolver, NgModuleRef } from '@angular/core';
import { Observable } from 'rxjs';
@Component({
  selector: 'ng-ruh-lazy-component',
  template: `
    <ng-content *ngIf="isLoading" select="[loading]">
    </ng-content>
    <ng-container  #vcRefComp 
                  *ngComponentOutlet="compType; ngModuleFactory: moduleFactory;" >
    </ng-container>
    <ng-container #vcRef></ng-container>
  `,
  styles: [],
  providers: [
    { provide: NgModuleFactoryLoader, 
      useClass: SystemJsNgModuleLoader }
  ]
})
export class NgRuhLazyComponentComponent implements OnInit {

  moduleFactory;

  compType: Type<any>;
  compRef : ComponentRef<any>;
  componentData :any
  isLoading : boolean

  @ViewChild("vcRef", {read: ViewContainerRef}) vcRef:ViewContainerRef;

  @Input() formData:Observable<any>;
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

  async loadModule(path:string, compName=""){
    this.isLoading = true
    // Child module factory.
    this.moduleFactory = await this.factoryLoader.load(path)
    
    // Child module reference.
    const module:NgModuleRef<any>=this.moduleFactory.create(this.injector);

    let moduleInstance = module.instance

    debugger
    this.compType=moduleInstance.componentMap[compName] || moduleInstance.getComponentEntry(compName);

    //this.childType=module.instance.getEntry();

    let componentFactory:ComponentFactory<any>=module.componentFactoryResolver
    .resolveComponentFactory(this.compType);
    
    // // Child component reference.
    this.compRef=componentFactory.create(this.injector);
    this.compRef.instance.data = this.componentData;
    // // Inserting a child component into the view.
    this.vcRef.insert(this.compRef.hostView);
    this.isLoading = false

  }

}
