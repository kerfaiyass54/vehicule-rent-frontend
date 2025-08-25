import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Client} from "../../models/client";

@Injectable({
  providedIn: 'root'
})
export class ClientServiceAdminService {
  baseUrl ="http://localhost:8100/";
    constructor(private http:HttpClient) {}

  createClient(client: Client, location:String){
    return  this.http.post<any>(this.baseUrl + "client/adding?locationName=" + location,client);
  }

  getAllClients(){
      return this.http.get<any[]>(this.baseUrl + "admin/clients");
  }

  deleteClient(id: any){
      return this.http.delete<any>(this.baseUrl + "client/delete/" + id);
  }

  getClient(name: any){
      return this.http.get<any>(this.baseUrl + "client/details/" + name);
  }

  updateClient(client: Client){
      return this.http.put<any>(this.baseUrl + "client/update", client);
  }

  changeLocation(client: String, location: String){
    return this.http.get<any>(this.baseUrl + "client/location/" + client + "?newLocation=" + location );
  }

  isCinExists(cin: any){
    return this.http.get<any>(this.baseUrl + "client/cin/exist/" + cin);
  }

  getNames(){
    return this.http.get<any>(this.baseUrl + "admin/names");
  }


}
