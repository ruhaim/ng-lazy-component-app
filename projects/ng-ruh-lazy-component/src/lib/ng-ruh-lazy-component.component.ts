import { Component, OnInit, NgModuleFactoryLoader, SystemJsNgModuleLoader, Injector, Input, ViewContainerRef, ViewChild, ComponentFactory, Type, ComponentRef } from '@angular/core';
import { ComponentFactoryResolver, NgModuleRef } from '@angular/core';
import { Observable } from 'rxjs';
@Component({
  selector: 'ng-ruh-ng-ruh-lazy-component',
  template: `
    <ng-content *ngIf="isLoading" select="[loading]">
    </ng-content>
    <ng-container  #vcRefComp 
                  *ngComponentOutlet="comp; ngModuleFactory: childFactory;" >
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

  childFactory;

  comp: Type<any>;
  compRef : ComponentRef<any>;
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
      this.loadModule(`${modulePath}#${moduleName}`)
  }

  @Input()
  set data(value: object) {
      this.compRef.instance.data
      // this.loadModule(`${modulePath}#${moduleName}`)
  }

  constructor(
    private factoryLoader:NgModuleFactoryLoader,
    private injector:Injector,
    private cfr:ComponentFactoryResolver  ) { }
  ngOnInit() {


  }

  async loadModule(path:string){
    this.isLoading = true
    console.log("Path:" , path)
    let factory = await this.factoryLoader.load(path)
    // Child module factory.
    this.childFactory=factory;
    // Child module reference.
    const module:NgModuleRef<any>=factory.create(this.injector);

    const r = module.componentFactoryResolver;
    const moduleFactories:Map<any, any> = module.componentFactoryResolver["_factories"];
    let dd = module.instance

    //  this.comp = <Component> moduleFactories.values().next().value
    // this.comp = module.instance.get("FormItemWrapperComponent2")
    this.comp=module.instance.getEntry();

    //this.childType=module.instance.getEntry();

    let childFactory:ComponentFactory<any>=module.componentFactoryResolver
    .resolveComponentFactory(this.comp);
    
    // // Child component reference.
    this.compRef=childFactory.create(this.injector);
    this.compRef.instance.data = "hjhf"
    // // Inserting a child component into the view.
    this.vcRef.insert(this.compRef.hostView);
    this.isLoading = false

  }

}
