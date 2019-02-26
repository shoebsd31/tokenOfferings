import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RefreshTokenService {

  constructor(private http: HttpClient) { }

  refreshToken():any{
    return this.http.post(`${environment.apiUrl}/v1/auth/refresh`,null);
  }
}
