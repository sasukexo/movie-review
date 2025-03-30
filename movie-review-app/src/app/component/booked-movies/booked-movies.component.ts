import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Movie } from '../../model/movie';

@Component({
  selector: 'app-booked-movies',
  templateUrl: './booked-movies.component.html',
  styleUrls: ['./booked-movies.component.css']
})
export class BookedMoviesComponent implements OnInit {
  bookedMovies: Movie[] = [];

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.getBookedMovies().subscribe(data => {
      this.bookedMovies = data;
    });
  }
}
