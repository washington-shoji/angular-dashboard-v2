import { Component } from '@angular/core';
import {ISideNavToggle} from "./interfaces/sidenavbartoggle.interface";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'dashboard-base';

  isSideNavCollapsed = false;
  screenWidth = 0;

  onToggleSideNav(data: ISideNavToggle): void {
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }
}
