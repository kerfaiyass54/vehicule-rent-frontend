import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Client} from "../../models/client";

@Injectable({
  providedIn: 'root'
})
export class ClientServiceAdminService {
  baseUrl ="http://localhost:8080/";
    constructor(private http:HttpClient) {

  }

  createClient(client: Client){
    return  this.http.post<any>(this.baseUrl + "client/adding",client);
  }
}
