import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { StartseiteComponent } from './startseite/startseite.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { NewPostComponent } from './new-post/new-post.component';
import { NewCommentComponent } from './new-comment/new-comment.component';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    StartseiteComponent,
    PostDetailsComponent,
    NewPostComponent,
    NewCommentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
