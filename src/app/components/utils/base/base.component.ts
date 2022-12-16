import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base',
  template: `
    <div class="home">
      <ng-content></ng-content>
      <ng-content select="[budi]"></ng-content>
    </div>
  `,
  styleUrls: ['./base.component.css']
})
export class BaseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
