import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'movie-movie-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css',
})
export class MovieListComponent {}
