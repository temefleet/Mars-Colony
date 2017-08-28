import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class BlogService {
  postsUrl = 'http://fourth.academy.red/wp-json/wp/v2/posts';

  constructor(private http: Http) {}

  getPosts(): Promise<{}> {
    return this.http.get(this.postsUrl)
                    .toPromise()
                    .then((response) => response.json())
                    .catch(this.handleError);
  }

  createPost(newPost) {
    const headers = new Headers({'Content-Type': 'application/json'});
    const body = JSON.stringify({ newPost });

    return this.http
               .post(this.postsUrl, body, { headers: headers })
               .toPromise()
               .then(response => response.json())
               .catch(this.handleError);
  }
  private handleError(error: any): Promise<string> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}

