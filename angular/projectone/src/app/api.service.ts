import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  // This will call the Go API
  getUsers(): Observable<any> {
    return this.http.get('/api/events');  // Assuming your Go API has a `/users` endpoint
  }
}
