import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pbb',
  templateUrl: './pbb.component.html',
  styleUrls: ['./pbb.component.css']
})
export class PbbComponent implements OnInit {
  luasTanah: number = 0;
  luasBangunan: number = 0;
  njopTanah: number = 0;
  njopBangunan: number = 0;
  njopKTP: number = 12_000_000;
  kenaPajak: number = 0.2;
  pbbTerutang: number = 0.005;
  stimulus: number = 15_000;
  result: number = 0;
  now: number = Date.now();
  price: number = 10_500_000;
  constructor() {
    console.log(this.now);
  }

  ngOnInit(): void {
  }

  listenLuasTanah($event: any) {
    this.luasTanah = $event;
    this.hitungPBB();
  }

  listenLuasBangunan($event: any) {
    this.luasBangunan = $event;
    this.hitungPBB();
  }

  listenNJOPTanah($event: any) {
    this.njopTanah = $event;
    this.hitungPBB();
  }

  listenNJOPBangunan($event: any) {
    this.njopBangunan = $event;
    this.hitungPBB();
  }

  hitungPBB() {

  //   while (limit < 3) {
    let hargaTanah = this.luasTanah * this.njopTanah;
    let hargaBangunan = this.luasBangunan * this.njopBangunan;
    
    this.result = ((((hargaTanah + hargaBangunan) - this.njopKTP) * this.kenaPajak) * this.pbbTerutang) - this.stimulus ;
  //   console.log("-----------------------")
  //   console.log("luas tanah", this.luasTanah);
  //   console.log("luas bangunan", this.luasBangunan);
  //   console.log("njop tanah", this.njopTanah);
  //   console.log("njop bangunan", this.njopBangunan);
  //   console.log("harga tanah", hargaTanah);
  //   console.log("harga bangunan", hargaBangunan);
  //   console.log("this.njopKTP",  this.njopKTP);
  //   console.log("this.kenaPajak",  this.kenaPajak);
  //   console.log("this.pbbTerutang",  this.pbbTerutang);
  //   console.log("this.stimulus",  this.stimulus);
  //   limit++;
  // }   
    // this.result = this.result * this.kenaPajak;
    // this.result = (this.pbbTerutang * this.result) - this.stimulus;

  }

}
