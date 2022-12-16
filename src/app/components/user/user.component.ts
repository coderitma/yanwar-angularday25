import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  username: string;
  name: string = "Budi Kusuma";
  email: string = "budi@mail.com";
  
  constructor() {
    this.username = "budi";
  }

  ngOnInit(): void {
  }

}
