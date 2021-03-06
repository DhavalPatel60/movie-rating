import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  trendingMovies: any;
  theatreMovies: any;
  popularMovies: any;
  constructor(private _http: HttpClient, private _router: Router) { }

  ngOnInit(): void {
    this.getTrendingMovies();
    this.getTheatreMovies();
    this.getPopularMovies();

  }
  getTrendingMovies(){
    this._http.get('../../assets/data/trending-movies.json').subscribe((movies)=>{
      this.trendingMovies = movies;
      console.log(this.trendingMovies);
    })
  }
  getTheatreMovies(){
    this._http.get('../../assets/data/theatre-movies.json').subscribe((movies)=>{
      this.theatreMovies = movies;
      console.log(this.theatreMovies);
    })
  }
  getPopularMovies(){
    this._http.get('../../assets/data/popular-movies.json').subscribe((movies)=>{
      this.popularMovies = movies;
      console.log(this.popularMovies);
    })
  }
  goToMovie(type: string, id: string){
    this._router.navigate(['movie',type, id]);
  }

}
