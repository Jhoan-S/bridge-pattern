import { Component } from '@angular/core';

@Component({
  selector: 'app-velocity-widget',
  styleUrls: ['velocity-widget.component.scss'],
  templateUrl: 'velocity-widget.component.html'
})

export class VelocityWigetComponent {

  isRefreshing: boolean = false;

  load(): void {
    console.log('Load data from Jira API');
  }

  refresh() : void {
    this.isRefreshing = true;
    setTimeout(() => this.isRefreshing = false, 2500);
  }
}