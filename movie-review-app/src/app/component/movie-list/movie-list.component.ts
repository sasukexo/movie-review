import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Movie } from '../../model/movie';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movies: Movie[] = [];

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.getMovies().subscribe(data => {
      this.movies = data;
    });
  }

  // ✅ First add the movie to the cart
  addToCart(movie: Movie): void {
    this.api.addToCart(movie).subscribe(() => {
      alert(`${movie.name} added to cart successfully!`);
    });
  }
}
