import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(data):any {
    return this.http.post(`${environment.apiUrl}/v1/auth/signin`, data);
  }

  activate(key) {
    return this.http.get(`${environment.apiUrl}/v1/auth/activate/${key}`);
  }

signup(data) {
    return this.http.post(`${environment.apiUrl}v1/auth/signup`, data);
  }

  signout(){
    var payload={
      refreshToken:localStorage.getItem('accessToken')
    }
    return this.http.post(`${environment.apiUrl}/v1/auth/signout`,payload);
  }
  
}
