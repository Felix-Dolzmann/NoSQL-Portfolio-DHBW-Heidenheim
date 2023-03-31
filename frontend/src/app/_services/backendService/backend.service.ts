import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http: HttpClient) { }

  getSpecificPost(id: string) {
    return this.http.get('http://localhost:3000/posts/' + id)
  }

  getAllPosts() {
    return this.http.get('http://localhost:3000/posts')
  }

  createComment(postId: string, author: string, content: string) {
    return this.http.post('http://localhost:3000/newComment/' + postId, {author: author, content: content})
  }
}
