import { Component } from '@angular/core';
import { Post } from '../models/post.service';

@Component({
  selector: 'app-posts',
  standalone: false,
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent {

  posty: Post[] = [];

  ngOnInit(){
    this.posty
  }

}
