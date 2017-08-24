import { Component } from '@angular/core';

import {
  trigger,
  animate,
  style,
  group,
  query,
  transition
  // stagger,
  // animateChild,
} from '@angular/animations';

export const reouterTransition = trigger('routerTransition', [
  
]);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [ 'routerTransition' ]
})
export class AppComponent {
  getState(outlet) {
    return outlet.activatedRouteData.state;
  }
}
