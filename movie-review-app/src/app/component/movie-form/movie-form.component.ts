import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.css']
})
export class MovieFormComponent implements OnInit {
  movieForm!: FormGroup;
  genres: string[] = ["Sci-Fi", "Thriller", "Action", "Drama", "Crime", "Romance", "Fantasy", "Adventure"];
  selectedImage: any = null;

  constructor(private fb: FormBuilder, private apiService: ApiService) {}

  ngOnInit(): void {
    this.movieForm = this.fb.group({
      name: ['', Validators.required],
      genre: ['', Validators.required],
      director: ['', Validators.required],
      imdb: ['', [Validators.required, Validators.min(0), Validators.max(10)]],
      image: [null, Validators.required] // Store image as Base64 or File Object
    });
  }

  onImageChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file); // Convert to Base64
      reader.onload = () => {
        this.selectedImage = reader.result; // Store Base64 data
        this.movieForm.patchValue({ image: this.selectedImage });
      };
    }
  }

  submitForm() {
    if (this.movieForm.invalid) {
      return;
    }

    const movieData = this.movieForm.value;

    this.apiService.addMovie(movieData).subscribe({
      next: () => {
        alert('Movie added successfully!');
        this.movieForm.reset();
        this.selectedImage = null; // Clear image preview
      },
      error: (err) => console.error('Error adding movie:', err)
    });
  }
}
  