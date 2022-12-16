import { Injectable } from '@angular/core';
import { IPost } from '../interfaces/i-post';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor() { }

  getAllPost(): IPost[] {
    return [
      new Post(1, 'Lorem ipsum 1', 'ini postingan ke 1 dari jc', true),
      new Post(2, 'Lorem ipsum 2', 'ini postingan ke 2 dari jc', true),
      new Post(3, 'Lorem ipsum 3', 'ini postingan ke 3 dari jc', true),
      new Post(4, 'Lorem ipsum 4', 'ini postingan ke 4 dari jc', true),
    ];
  }
}
