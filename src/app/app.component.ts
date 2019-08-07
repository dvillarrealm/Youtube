import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularPractice';
  collapsed: boolean = false;
  fillerNav = [
    { name: 'Home', route: '', icon: 'home' },
    { name: 'Trending', route: '/Trending', icon: 'trending_up' },
    { name: 'Subscriptions', route: '/Subscriptions', icon: 'subscriptions' },
    { name: 'Library', route: '/Library', icon: 'folder' },
    { name: 'History', route: '/History', icon: 'history' },
    { name: 'Watch later', route: '/Watch_later', icon: 'watch_later' },
  ];

  collapseMenu() {
    this.collapsed = !this.collapsed;
  }
}
