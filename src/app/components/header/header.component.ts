import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  image: string = "https://bcafinance.co.id/Themes/BCAFinanceTheme/Images/bcafinancelogo.png";
  constructor() { }

  ngOnInit(): void {
  }

}
