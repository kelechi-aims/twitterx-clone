import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PostComponent } from '../post/post.component';
import { Post, User, Comment, PostDetails } from '../../models/post.model';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';
// import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-feed',
  imports: [FontAwesomeModule, PostComponent, CommonModule],
  templateUrl: './feed.component.html',
  styleUrl: './feed.component.css'
})
export class FeedComponent {
  posts: PostDetails[] = [];


  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getPosts().subscribe(
      (posts: Post[]) => {
        // Initialize the posts array with empty objects
        this.posts = posts.map((post) => ({ post }));

        // Fetch user and comments for each post
        this.posts.forEach((item, index) => {
          // Fetch user
          const post: Post = item.post;
          this.apiService.getUser(post.userId).subscribe(
            (user: User) => {
              this.posts[index].user = user;
            }
          );

          // Fetch comments
          
          this.apiService.getComments(post.id).subscribe(
            (comments: Comment[]) => {
              this.posts[index].comments = comments;
            },
          );
        });
      
    }
  );
  }

  get postCount(): number {
    return this.posts.length;
  }
}
