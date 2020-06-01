import { Component, OnInit } from '@angular/core';
import { NavItem } from 'src/interfaces';

@Component({
  selector: 'app-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.scss']
})
export class NavItemComponent implements OnInit {
  navItems: NavItem[] = [
    {title: 'Artists', href: '/artists'},
    {title: 'Art Streams', href: '/streams'},
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
