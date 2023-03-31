import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BackendService } from '../_services/backendService/backend.service';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-new-comment',
  templateUrl: './new-comment.component.html',
  styleUrls: ['./new-comment.component.scss']
})
export class NewCommentComponent implements OnInit {

  constructor(private route: ActivatedRoute, private backend: BackendService, private fb: FormBuilder) { }

  postId: string = '';

  commentForm = this.fb.group({
    author: ['', Validators.required],
    content: ['', Validators.required]
  });

  ngOnInit(): void {
    const postId = this.route.snapshot.paramMap.get('postId');
    if(postId) {
      this.postId = postId;
    }
  }

  onSubmit() {
    console.log(this.commentForm.value);
    this.createComment(this.commentForm.value.author, this.commentForm.value.content);
  }

  createComment(author: string, content: string) {
    this.backend.createComment(this.postId, author, content).subscribe((data: any) => {
      console.log(data);
    });
  }

}
