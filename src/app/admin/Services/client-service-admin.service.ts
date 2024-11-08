import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Client} from "../../models/client";

@Injectable({
  providedIn: 'root'
})
export class ClientServiceAdminService {
  baseUrl ="http://localhost:8080/";
    constructor(private http:HttpClient) {}

  createClient(client: Client, location:String){
    return  this.http.post<any>(this.baseUrl + "client/adding?locationName=" + location,client);
  }

  getAllClients(){
      return this.http.get<any>(this.baseUrl + "admin/clients");
  }

  deleteClient(id: any){
      return this.http.delete(this.baseUrl + "client/" + id);
  }

  getClient(name: any){
      return this.http.get(this.baseUrl + "client/" + name);
  }

  updateClient(client: Client){
      return this.http.put(this.baseUrl + "client/update", client);
  }

  isClientExist(name: String){
      return this.http.get(this.baseUrl + "client/exist/" + name );
  }

  changeLocation(client: String, location: String){
    return this.http.get(this.baseUrl + "client/location/" + client + "?newLocation=" + location );
  }

  isCinExists(cin: any){
    return this.http.get(this.baseUrl + "client/cin/exist/" + cin);
  }
}
