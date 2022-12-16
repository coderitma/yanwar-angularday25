import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  // templateUrl: './server.component.html',
  template: `
    <h1>Halo</h1>
    <p>{{ name }}</p>
  `,
  // styleUrls: ['./server.component.css'],
  styles: [
    `h1 {color: red}`,
    `p {color: blue}`
  ]
})
export class ServerComponent {
  name: string = "Halo ini server component";
}