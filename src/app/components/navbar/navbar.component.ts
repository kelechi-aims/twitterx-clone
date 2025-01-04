import {CommonModule, NgClass} from '@angular/common';
import { Component, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, NgClass],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isSidebarOpen = false;

  constructor(private eRef: ElementRef) {}

  toggleSidebar(): void{
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  // Listen for clicks anywhere in the document
  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event): void {
    if (this.isSidebarOpen && !this.eRef.nativeElement.contains(event.target)) {
      this.isSidebarOpen = false;
    }
  }

  ngOnDestroy(): void {
    // Perform any necessary cleanup if needed
  }

}
