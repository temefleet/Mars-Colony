import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../_services/blog';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
  providers: [
    BlogService
  ]
})
export class BlogComponent implements OnInit {

  posts: {};
  loader = true;

  constructor(private blogService: BlogService) { }

  async ngOnInit() {
    this.posts = await this.blogService.getPosts();
    this.loader = false;
  }
}


