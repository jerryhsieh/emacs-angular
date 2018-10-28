import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Post } from '../models/posts';
//import { POSTS } from './mock-posts';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

    constructor(private http:HttpClient) { }
    getPosts(): Observable<Post[]> {
        //return of(POSTS);
        return this.http.get<Post[]>("https://jsonplaceholder.typicode.com/posts?userId=1");
    }
}
