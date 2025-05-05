import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';

@Component({
  selector: 'app-users-table',
  imports: [AngularSvgIconModule, CommonModule],
  templateUrl: './users-table.component.html',
})
export class UsersTableComponent {
  tableHeadings = [
    { id: 1, title: 'User Name and Email' },
    { id: 2, title: 'Location' },
    { id: 3, title: 'Signup Date' },
    { id: 4, title: 'Fans' },
    { id: 5, title: 'Songs' },
  ];

  users = [
    {
      name: 'Seth Mills',
      email: 'Seth@ropchat.me',
      country: 'USA',
      city: 'Ohio',
      signup: '27 Dec, 2019',
      fans: '169.3K',
      songs: 186,
      avatar: 'assets/user-avatar.png',
    },
    {
      name: 'Abram Workman',
      email: 'AbramK@gmail.com',
      country: 'USA',
      city: 'Alabama',
      signup: '04 Apr, 2016',
      fans: '1.3M',
      songs: 629,
      avatar: 'assets/user-avatar.png',
    },
    {
      name: 'Alfonso',
      email: 'Alfonsoking.12@gmail.com',
      country: 'Brazil',
      city: 'Rio',
      signup: '14 Jun, 2020',
      fans: '537.7K',
      songs: 518,
      avatar: 'assets/user-avatar.png',
    },
    {
      name: 'Ann Schleffer',
      email: 'A.Schle@hotmail.com',
      country: 'USA',
      city: 'Illinois',
      signup: '1 Feb, 2019',
      fans: '531.3K',
      songs: 61,
      avatar: 'assets/user-avatar.png',
    },
    {
      name: 'Jocelyn Bergson',
      email: 'Jocelyn@yahoo.com',
      country: 'France',
      city: 'Paris',
      signup: '19 Sep, 2018',
      fans: '816.2K',
      songs: 79,
      avatar: 'assets/user-avatar.png',
    },
    {
      name: 'Desirae',
      email: 'Desiraem@gmail.com',
      country: 'Canada',
      city: 'Downtown',
      signup: '27 Nov, 2015',
      fans: '638.9K',
      songs: 515,
      avatar: 'assets/user-avatar.png',
    },
    {
      name: 'Martin Ekstrom Bothman',
      email: 'MartineB@yahoo.com',
      country: 'Canada',
      city: 'Toronto',
      signup: '03 Oct, 2016',
      fans: '2.3M',
      songs: 716,
      avatar: 'assets/user-avatar.png',
    },
    {
      name: 'Wilson Vaccaro',
      email: 'Wilson@vaccaro.com',
      country: 'USA',
      city: 'New york',
      signup: '14 Sep, 2018',
      fans: '825.1K',
      songs: 372,
      avatar: 'assets/user-avatar.png',
    },
  ];
}
