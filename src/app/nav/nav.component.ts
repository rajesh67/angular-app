import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

// export const componentsList = [
//   'Accordion', 'Alert', 'Buttons', 'Carousel', 'Collapse', 'Datepicker', 'Dropdown', 'Modal', 'Pagination', 'Popover',
//   'Progressbar', 'Rating', 'Tabs', 'Timepicker', 'Tooltip', 'Typeahead'
// ];

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})


export class NavComponent implements OnInit {
  navbarOpen = false;
  // components = componentsList;
  faCoffee = faCoffee;
  constructor(private router:Router) { }

  ngOnInit() {
  }

  // isActive(currentRoute: any[], exact = true): boolean {
  //   return this.router.isActive(this.router.createUrlTree(currentRoute), exact);
  // }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

}
