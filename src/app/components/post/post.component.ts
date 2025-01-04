import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faRetweet } from '@fortawesome/free-solid-svg-icons';
import { faComment } from '@fortawesome/free-regular-svg-icons';
import { PostDetails } from '../../models/post.model'
// import { TwitterTimePipe } from '../../pipes/twitter-time.pipe';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post',
  imports: [FontAwesomeModule,  CommonModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {
  faRetweet = faRetweet;
  faComment = faComment;

  @Input() postDetails!: PostDetails;

  isImage(url: string): boolean {
    return /\.(jpeg|jpg|gif|png|webp)$/i.test(url);
  }
  
  isVideo(url: string): boolean {
    return /\.(mp4|webm|ogg)$/i.test(url);
  }  

  handleImageError(event: Event): void {
    const img = event.target as HTMLImageElement;
    img.src = 'https://example.com/fallback-image.jpg'; // Set a fallback image
  }
  

}
