import { Component } from '@angular/core';
import { Widget } from '../widget.interface';
import { WIDGET } from '../widget.token';

@Component({
  selector: 'app-velocity-widget',
  styleUrls: ['velocity-widget.component.scss'],
  templateUrl: 'velocity-widget.component.html',
  providers: [{
    provide: WIDGET,
    useExisting: VelocityWidgetComponent
  }]
})

export class VelocityWidgetComponent implements Widget {

  isRefreshing: boolean = false;

  load(): void {
    console.log('Load data from Jira API');
  }

  refresh() : void {
    this.isRefreshing = true;
    setTimeout(() => this.isRefreshing = false, 2500);
  }
}