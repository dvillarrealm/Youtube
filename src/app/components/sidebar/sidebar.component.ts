import { Component, OnInit, ChangeDetectorRef, Output, EventEmitter } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  @Output('collapse') collapse = new EventEmitter();
  shouldRun = true;

  ngOnInit() {
  }

  collapseMenu() {
    this.collapse.emit(null);
  }

}
