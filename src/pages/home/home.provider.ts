import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HomeProvider {

  constructor(public http: HttpClient) { }

  getBookDetail(name: any) : Observable<any> {
    return this.http.get('https://www.googleapis.com/books/v1/volumes?q=' + name);
  }
}
