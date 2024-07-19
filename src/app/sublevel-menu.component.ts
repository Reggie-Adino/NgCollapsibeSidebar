// import { SublevelMenuComponent } from './sublevel-menu.component';
import { Component, Input } from '@angular/core';
import { InavbarData } from './sidenav/helper';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sublevel-menu',
  standalone: true,
  imports: [NgIf, NgFor, NgClass, RouterLink,RouterLinkActive],
  template: `
   <ul *ngIf="collapsed && data.items && data.items.length > 0">
        <li *ngFor="let item of data.items" class="sublevel-nav-item">
          <a class="sublevel-nav-link" *ngIf="item.items && item.items.length > 0">
            <i class="subleve-link-icon fa fa-circle"></i>
            <span class="sublevel-link-text" *ngIf="collapsed">{{item.label}}</span>
            <i *ngIf="item.items && collapsed" class="menu-collapse-icon" [ngClass]="!item.expanded ? 'fal fa-angle-right' : 'fal fa-angle-down'"></i>
          </a>
          <a class="sublevel-nav-link" *ngIf="!item.items || (item.items.length === 0)"
          [routerLink]="[item.routeLink]"
          routerLinkActive="active-sublevel"
          [routerLinkActiveOptions]="{exact:true}"
          >
          <i class="sublevel-link-icon fa fa-circle"></i>
          <span class="sublevel-link-text" *ngIf="collapsed">{{item.label}}</span>
        </a>
        <div *ngIf="item.items && item.items.length > 0">
          <app-sublevel-menu
            [collapsed]="collapsed"
            [multiple]="multiple"

          >

          </app-sublevel-menu>
        </div>
        </li>
   </ul>
  `,
  styles: ``
})
export class SublevelMenuComponent {

  @Input() data:InavbarData = {
    routeLink: '',
    icon: '',
    label: '',
    items: []
  }

  @Input() collapsed = false;
  @Input() animating: boolean | undefined;
  @Input() multiple: boolean = false;
  @Input() expanded:boolean = false;

  handleClick(item: any) :void {
    if(!this.multiple) {
      if(this.data.items && this.data.items.length > 0) {
        for(let modelItem of this.data.items) {
            if(item !== modelItem && modelItem.expanded) {
              modelItem.expanded = false
            }
        }
      }
    }
    item.expanded = !item.expanded;
  }

}
