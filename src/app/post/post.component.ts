import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Post} from '../post.model';
import {PostService} from '../post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  providers: [PostService]
})
export class PostComponent implements OnInit {
  posts: Post[];

  constructor(private router: Router, private postService: PostService) { }

  ngOnInit() {
    this.posts = this.postService.getPosts();
  }

  goToDetailPage(clickedPost: Post){
    this.router.navigate(['posts', clickedPost.id]);
  };

}
