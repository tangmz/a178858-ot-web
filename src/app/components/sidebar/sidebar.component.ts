import { Component, OnInit } from '@angular/core';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'design_app', class: '' },
    { path: '/icons', title: 'OT Report',  icon:'business_chart-bar-32', class: '' },
    { path: '/maps', title: 'Salary Report',  icon:'business_chart-pie-36', class: '' },
    { path: '/user-profile', title: 'Employee Details',  icon:'users_single-02', class: '' },
    { path: '/table-list', title: 'Table List',  icon:'design_bullet-list-67', class: '' },
    { path: '/ot_report', title: 'OT Report',  icon:'business_chart-bar-32', class: '' },
    { path: '/salary_report', title: 'Salary Report',  icon:'business_chart-pie-36', class: '' },
    { path: '/calc', title: 'Calculator',  icon:'education_paper', class: 'active active-pro' }

];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ( window.innerWidth > 991) {
          return false;
      }
      return true;
  };
}
