import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Movie } from './movie';

@Injectable()
export class MovieService {
    private url = "http://localhost:5000/discover";
    
    constructor(private http: HttpClient){}

    getMovies(): Promise<Array<Movie>> {
        return this.http
          .get(this.url)
          .toPromise()
          .then((response: Response) => {
            return response.json().then((data) => {
                return data.data as Movie[]
            })
          });
    }
}