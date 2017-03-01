 import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Post } from './post';
import { PostService } from './post.service';

@Component({
  selector: 'post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  posts: Post[];
  constructor(private postService: PostService,private router: Router) { }

  ngOnInit() {
    let timer = Observable.timer(0, 10000);
    timer.subscribe(() => this.getPosts());
  }
  getPosts() {
    this.postService.getPosts()
      .subscribe(posts => this.posts = posts);

  }
  gotToShow(post:Post):void{
    let postLink=['/posts',post.id];
    this.router.navigate(postLink);  
    }

}
