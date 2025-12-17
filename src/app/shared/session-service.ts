import {HttpClient, HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private api = "http://localhost:8100/sessions/";

  constructor(private http: HttpClient) {}

  saveSession() {
    return this.http.post(`${this.api}save`, {}).subscribe();
  }

  getSessions() {
    return this.http.get<any[]>(`${this.api}`);
  }

  getSessionsByDate(date: any) {
    return this.http.get<any[]>(`${this.api}`+ date);
  }

  getSessionsByEmail(email: any) {
    return this.http.get<any[]>(`${this.api}` + email);
  }

  getLoginSessions(page: number = 0,  size: number = 5, email: string){
    let params = new HttpParams()
      .set('page', page)
      .set('size', size)
      .set('email', email);
    return this.http.get<any>(this.api + "list/sessions", {params});
  }



}
