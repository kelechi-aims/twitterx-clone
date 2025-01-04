import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LiveOnX, Trend, WhoToFollow } from '../../models/sidebar.models';
// import { AsyncPipe } from '@angular/common';
import { User } from '../../models/post.model';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  users: User[] = []

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getAllUsers().subscribe(
      (data: User[]) => {
        this.users = data;
      }
    )

  }


  liveOnX: LiveOnX[] = [
    { id:'1', title: 'Sky News Breakfast', avatar: 'https://via.placeholder.com/50', host: 'Sky News', audience: '+10.9K' },
    { id:'2', title: 'Live with Restream, January 01', avatar: 'https://via.placeholder.com/50', host: 'Sahara Reporters', audience: '+3K' },
    { id:'3', title: 'Sunrise Daily', avatar: 'https://via.placeholder.com/50', host: 'Channels Television', audience: '+390' },
  ];

  trends: Trend[] = [
    { id:'1', title: 'Doggy', posts: '19.2K' },
    { id:'2', title: '#PiNetwork2025', posts: '5,382' },
    { id:'3',title: 'Egbeda', posts: '5,382' },
  ];

  showAll: boolean = false;

  toggleShowAll(): void {
    this.showAll = !this.showAll;
  }

}
