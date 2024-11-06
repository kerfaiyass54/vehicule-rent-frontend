import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LocationServiceAdminService {
  baseUrl ="http://localhost:8080/";
  constructor(private http: HttpClient) {

  }
}
