import { Component, OnInit } from '@angular/core';
import { BackendService } from '../_services/backendService/backend.service';

@Component({
  selector: 'app-startseite',
  templateUrl: './startseite.component.html',
  styleUrls: ['./startseite.component.scss']
})
export class StartseiteComponent implements OnInit {

  posts: any[] = [{id: 123, title: 'test', content: 'test'}, {id: 1234, title: 'test2', content: 'test2'}]

  constructor(private backend: BackendService) { }
  ngOnInit(): void {
    this.getAllPosts();
  }

  getAllPosts() {
    this.backend.getAllPosts().subscribe((data: any) => {
      this.posts = data;
    });
  }

}
