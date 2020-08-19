import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  public sidebarYN: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  public sidebar() {
    this.sidebarYN = !this.sidebarYN;
  }

}
