import { Component, OnInit } from '@angular/core';
import { IPost } from './interfaces/i-post';
import { Product } from './models/product';
import { PostService } from './services/post.service';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: `<h1>Halo</h1> <app-server></app-server>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  posts: IPost[] = [];


  constructor(private postService: PostService) {
  }
  
  ngOnInit(): void {
    this.posts = this.postService.getAllPost();
  }

}
