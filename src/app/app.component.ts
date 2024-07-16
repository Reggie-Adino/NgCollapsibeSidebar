import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SidenavComponent } from "./sidenav/sidenav.component";
import { BodyComponent } from './body/body.component';

interface SideNavToggle {
  screenWidth:number;
  collapsed:boolean;
}
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SidenavComponent,BodyComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'sidebar-nav-collapsible';
  screenWidth = 0;
  isSideNavCollapsed = false

  onToggleSideNav(data: SideNavToggle): void {
    this.screenWidth= data.screenWidth;
    this.isSideNavCollapsed = data.collapsed
  }
}
