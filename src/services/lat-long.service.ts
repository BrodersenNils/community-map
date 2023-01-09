import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LatLongService {
  private YOUR_ACCESS_KEY: string = '';
  private url = 'https://eu1.locationiq.com/v1/search?';
  

  constructor(private http: HttpClient) {}

  getcoordinates(
    street: string,
    number: number,
    city: string
  ): Observable<any> {
    return this.http.get<any>(
      this.url +
        `key=${this.YOUR_ACCESS_KEY}&q=${street} ${number}, ${city}&format=json&limit=1`
    );
  }
}
