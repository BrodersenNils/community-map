import { Injectable } from '@angular/core';
import { User } from 'src/models/user.class';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {} 
  
  public getUsers(): Observable<User[]> {
    const url = '/assets/usersDummyDatabase.json'; 
    return this.http.get<User[]>(url);
  }

 
}
