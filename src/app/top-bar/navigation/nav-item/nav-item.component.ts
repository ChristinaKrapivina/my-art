import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.scss']
})
export class NavItemComponent implements OnInit {
  navItems = [
    {title: 'Artists', href: '#artists'},
    {title: 'Art Streams', href: '#'},
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
