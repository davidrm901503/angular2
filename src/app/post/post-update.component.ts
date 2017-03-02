import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Post } from './post';
import { PostService } from './post.service';

@Component({
    selector: 'post-update',
    templateUrl: './post-update.component.html',
    styleUrls: ['./post.component.css']
})
export class PostUpdateComponent {
    post = new Post;
    submitted: boolean = false;

    constructor(private postService: PostService) { }

    createPost(post: Post) {
        this.submitted = true;
        this.postService.createPost(post)
            .subscribe(data => { return true },
            error => {
                console.log("error al crear ");
                return Observable.throw(error);
            });
    }
}
