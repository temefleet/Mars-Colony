import { Injectable } from '@angular/core';
import { Colonist, NewColonist } from '../_models/colonist';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ColonistService {
  colonistsUrl = 'https://red-wdp-api.herokuapp.com/api/mars/colonists';
  storedColonist: Colonist;

  constructor(private http: Http) {}

  registerColonist(colonist: NewColonist): Promise<Colonist> {
    const headers = new Headers({'Content-Type': 'application/json'});
    const body = JSON.stringify({ colonist });
    return this.http
      .post(this.colonistsUrl, body, { headers: headers })
      .toPromise()
      .then(response => {
        localStorage.setItem('colonistId', response.json().colonist.id);
        // this.storedColonist = response.json().colonist;
        return response.json().colonist
      })
      .catch(this.handleError);
  }

  getStoredColonist() {
    return this.storedColonist;
  }
  
  private handleError(error: any): Promise<string> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}