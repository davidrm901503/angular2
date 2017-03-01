import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Post } from './post';
import { PostService } from './post.service';

@Component({
  selector: 'post-new',
  templateUrl: './post-new.component.html',
  styleUrls: ['./post.component.css']
})
export class PostNewComponent {
  post = new Post;
  submitted: boolean = false;

  constructor(private postService: PostService) { }
  crear(post: Post) {
    this.submitted = true;
    this.postService.createPost(post)
      .subscribe(data => { return true },
      error => {
        console.log("error al crear ");
        return Observable.throw(error);
      });
  }
}
