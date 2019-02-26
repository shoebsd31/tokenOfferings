import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TokenofferingService {

  constructor(private http: HttpClient) { }

  getTokens()
  {
    return this.http.get(`${environment.apiUrl}/v1/tokenOffering`);
  }

  getTokenDetails(id)
  {
    return this.http.get(`${environment.apiUrl}/v1/tokenOffering/${id}`);
  }
}
