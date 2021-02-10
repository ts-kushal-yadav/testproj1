import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPost } from './post';

@Injectable({
  providedIn: 'root'
})
export class OnlinepostsService {

  private _url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http:HttpClient) { }

  getPosts(): Observable<IPost[]>{
    console.log(this.http.get<IPost[]>(this._url))
    return this.http.get<IPost[]>(this._url)
  }
}
