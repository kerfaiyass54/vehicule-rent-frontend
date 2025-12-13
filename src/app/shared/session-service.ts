import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private api = "http://localhost:8100/sessions/";

  constructor(private http: HttpClient) {}

  saveSession(username: any, email: any) {
    return this.http.post(`${this.api}save`, { username, email }).subscribe();
  }

  getSessions() {
    return this.http.get(`${this.api}`);
  }

  getSessionsByDate(date: any) {
    return this.http.get(`${this.api}`+ date);
  }

  getSessionsByEmail(email: any) {
    return this.http.get(`${this.api}` + email);
  }



}
