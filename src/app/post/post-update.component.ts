import { ActivatedRoute, Params } from '@angular/router';
import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Post } from './post';
import { PostService } from './post.service';

@Component({
    selector: 'post-update',
    templateUrl: './post-update.component.html',
    styleUrls: ['./post.component.css']
})
export class PostUpdateComponent implements OnInit {
    post = new Post;
    submitted: boolean = false;

    constructor(
        private postService: PostService,
        private http: Http,
        private route: ActivatedRoute,

    ) { }

    ngOnInit() {
        let postRequest = this.route.params
            .flatMap((params: Params) => this.postService.getPost(+params['id']));
        postRequest.subscribe(response => this.post = response.json());
    }

    updatePost(post: Post) {
        this.submitted = true;
        this.postService.updatePost(post)
            .subscribe(data => { return true },
            error => {
                console.log("error al actualizar");
                return Observable.throw(error);
            });
    }
}
