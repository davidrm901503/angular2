import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Http } from '@angular/http';
import { Post } from './post';
import { PostService } from './post.service';

@Component({
	selector: 'post-show',
	templateUrl: 'post-show.component.html',
	styleUrls: ['post.component.css']
})

export class PostShowComponent implements OnInit {
	id: number;
	routeId: any;

	constructor(
		private http: Http,
		private route: ActivatedRoute,
		private postService: PostService,
		private router: Router
	) { }

	post: Post;

	ngOnInit() {
		this.routeId = this.route.params.subscribe(
			params => {
				this.id = +params['id'];
			})
		let postRequest = this.route.params
			.flatMap((params: Params) => this.postService.getPost(+params['id']));
		postRequest.subscribe(response => this.post = response.json());
	}

	goToEdit(post: Post): void {
		let postLink = ['/posts', post.id, 'edit'];
		this.router.navigate(postLink);
	}

}