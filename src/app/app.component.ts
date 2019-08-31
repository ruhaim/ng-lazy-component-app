import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-lazy-component-app';
  moduleMatrix = [[1,2],[1,2],[1,2]]
  lazyData = [
    {
      label:"Module-1 Comp-1",
      modulePath:"..path to module"
    },
    
  ]
}
