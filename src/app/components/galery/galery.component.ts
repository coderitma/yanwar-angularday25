import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-galery',
  templateUrl: './galery.component.html',
  styleUrls: ['./galery.component.css']
})
export class GaleryComponent implements OnInit {
  images: string[] = [
    "https://picsum.photos/300/300?random=1",
    "https://picsum.photos/300/300?random=2",
    "https://picsum.photos/300/300?random=3",
    "https://picsum.photos/300/300",
  ]
  constructor() { }

  ngOnInit(): void {
  }

  tampilData(data: any) {
    console.log(data);
    console.log("Event dipanggil nih");
  }

  addImage() {
    /**
     * angka acak dari kemungkinan 1 s/d 60
     */
    let randomNumber: number = Math.floor(Math.random() * 60);
    this.images.push(`https://picsum.photos/300/300?random=${randomNumber}`);
  }
  
  gantiGambar(indeks: number, angkaRandom: number) {
    this.images[indeks] = `https://picsum.photos/300/300?random=${angkaRandom}`;
  }

}
