import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/api/auth'; // ajuste para o seu backend

  constructor(private http: HttpClient) {}

  register(user: any) {
    return this.http.post('http://localhost:8080/api/users', user, {
      withCredentials: false
    });
  }


  login(credentials: any) {
    return this.http.post('http://localhost:8080/api/users', credentials, {
      withCredentials: false
    });
  }
}
