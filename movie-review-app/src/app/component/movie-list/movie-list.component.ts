import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import {Movie} from '../../model/movie';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})
export class MovieListComponent implements OnInit {
  movies: Movie[] = [];

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.getMovies().subscribe(data => {
      this.movies = data;
    });
  }
}
