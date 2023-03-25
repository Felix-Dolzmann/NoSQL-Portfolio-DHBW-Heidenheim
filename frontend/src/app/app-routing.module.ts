import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostDetailsComponent } from './post-details/post-details.component';
import { StartseiteComponent } from './startseite/startseite.component';

const routes: Routes = [
  { path: '', redirectTo: 'startseite', pathMatch: 'full' },
  { path: 'startseite', component: StartseiteComponent },
  { path: 'postDetails/:id', component: PostDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
