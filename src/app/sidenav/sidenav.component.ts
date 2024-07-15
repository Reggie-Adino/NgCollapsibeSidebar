import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import {navData} from './nav-data';
import { RouterModule, Routes } from '@angular/router';

interface SideNavToggle {
  screemWidth:number;
  collapsed:boolean;
}

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})

export class SidenavComponent {

  @Output() onToggleSideNav:EventEmitter<SideNavToggle> = new EventEmitter();
  collapsed = false;
  screenWidth = 0;
  navData = navData;

  toggleCollapse():void {
    this.collapsed = !this.collapsed;
    this.onToggleSideNav.emit({collapsed:this.collapsed, screemWidth: this.screenWidth});
  }

  closeSidenav():void {
    this.collapsed= false;
    this.onToggleSideNav.emit({collapsed:this.collapsed, screemWidth: this.screenWidth});
  }

}
