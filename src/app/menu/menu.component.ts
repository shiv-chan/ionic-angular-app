import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { MenuItem } from '../menuItem';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  menuItems: MenuItem[] = [
    {
      title: 'Sign in',
      url: '/signin',
      disabled: false,
    },
    {
      title: 'Master List',
      url: '/master-list',
      disabled: false,
    },
    {
      title: 'Link 1',
      disabled: true,
    },
    {
      title: 'Link 2',
      disabled: true,
    },
    {
      title: 'Link 3',
      disabled: true,
    },
  ];

  constructor(private menu: MenuController) {}

  ngOnInit() {}
}
