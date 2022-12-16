import { Component, OnInit } from '@angular/core';
import { IMenu } from 'src/app/interfaces/i-menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menus: IMenu[] = [];
  menu: IMenu;
  pajakPPN: number = 11/100;
  harga: number = 0;
  grandTotal: number = 0;
  bayar: number = 0;
  sisa: number = 0;
  statusPembayaran: boolean = false;

  constructor() {
    this.menu = {
      name: "",
      price: 0,
      quantity: 0,
    }
  }

  private calculate(): void {
    for (let i in this.menus) {
      this.harga += 
        this.harga + (this.menus[i].price * this.menus[i].quantity);
    }

    this.grandTotal = (this.harga * (this.pajakPPN)) + this.harga
  }

  addMenu(): void {
    let temp: IMenu = {
      name: this.menu.name,
      price: this.menu.price,
      quantity: this.menu.quantity
    }
    this.menus.push(temp);
    this.harga = 0;
    this.calculate();
  }

  removeMenu(index: number): void {
    this.menus.splice(index, 1);
    this.harga = 0;
    this.calculate();
  }

  enter($event: any): void {
    if ($event.which === 13) {
      if (this.bayar >= this.grandTotal) {
        this.statusPembayaran = true;
        let sisaPembayaran = this.grandTotal - this.bayar
        this.sisa = sisaPembayaran <= -1 
          ? this.bayar - this.grandTotal : sisaPembayaran 
      } else {
        this.statusPembayaran = false;
      }
    }
  }

  ngOnInit(): void {
  }

}
