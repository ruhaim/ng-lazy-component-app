This repo holds the angular app that demonstrates the lazy loading capabilities of the ng-ruh-lazy-component 
The npm repo for ng-ruh-lazy-component is here `https://www.npmjs.com/package/ng-ruh-lazy-component`

A simple utility to dynamically lazy load components into an angular app without routing dependency.
- Much inspiration drawn from https://netbasal.com/the-need-for-speed-lazy-load-non-routable-modules-in-angular-30c8f1c33093
and https://medium.com/@esanjiv/complete-beginner-guide-to-publish-an-angular-library-to-npm-d42343801660

## Demo Screen
![Demo](https://i.imgur.com/J6LPD6G.gif)

## Benefits
- Reduce your inital app load time by loading only the essential components first
- Reduce the initial payload size
- Leverage lazy loading features WITHOUT routing dependency (Not all apps are route based )
- Ideal for apps that need to build dynamic UIs defined via JSON configs or based on user driven highly customizable UIs  
- Prevents unnessasary memory hogging by loading only what is required 

## Usage
On `app.module` file import the module

```javascript
import { NgRuhLazyComponentModule } from 'ng-ruh-lazy-component'; //<-- Add this line

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    NgRuhLazyComponentModule  //<-- Add this line
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```


- On anywhere in your component templates add the following

```javascript
<ng-ruh-lazy-component 
    componentPath="src/app/modules/lazy-module-1/lazy-module-1.module#LazyModule1Module#Comp1Component"
    [data] = "dataToPushToLoadedComponent">
    <div error>There was a problem loading the component</div>
    <div loading>Loading Component, Please stand by</div>
</ng-ruh-lazy-component>

```
- `componentPath` : should take the format of `<Path to .module file>#<Name of the module>#<Component Key>`
- `data` : data To Push To Loaded Component
- `error` directive (Optional) : Allows you to specify html to show when an error is encountered 
- `loading` directive (Optional) : Allows you to specify html to show when the module is loading 


## Prerequisites

The smallest unit of Angular code that could be lazy loaded is an Angular Module (NGModule) and NOT a Component, 
Hence ALWAYS make sure you create a module that encapsulates one or more of the Components you need to reload.

- Create your module, use `ng g m modules/lazy-module1`
- Create 1 or more components under the module, use `ng g c modules/lazy-module1/comp1`, `ng g c modules/lazy-module1/comp2`
- on the `modules/lazy-module1/lazy-module1.module`

```javascript
@NgModule({
  declarations: [Comp1Component, Comp2Component],
  entryComponents: [Comp1Component, Comp2Component], // <-- Add this line
  imports: [
    CommonModule
  ]
})
export class LazyModule1Module { 
  static componentMap = {                 // <-- Add static property componentMap 
    "Comp1Component" : Comp1Component,    //    to map the string component key with 
    "Comp2Component" : Comp2Component     //     the actual component ref
    }                                     // you can also add a function named getComponentEntry(compType:string) 
}                                               
```
- On your `angular.json` on the project root, add the module path the the `lazyModules` array in the `project.<your-app-name>.architect.build.options.lazyModules`
```javascript
 project:{
     <your-app-name>:{
         architect:{
             build:{
                 options:{
                     lazyModules:[
                         ...
                         '<path to .module file(s)>',
                         'src/app/modules/lazy-module1/lazy-module1.module',
                         ...
                     ]
                 }
             }
         }
     }
 }
```
- Follow above steps for each module that need to be lazy loaded
