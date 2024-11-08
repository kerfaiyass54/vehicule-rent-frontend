import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LocationServiceAdminService {
  baseUrl ="http://localhost:8080/";
  constructor(private http: HttpClient) {}

  getRepairs(name: String){
    return this.http.get(this.baseUrl + "location/repairs");
  }

  getSuppliers(name: String){
    return this.http.get(this.baseUrl + "location/suppliers");
  }

  getClients(name: String){
    return this.http.get(this.baseUrl + "location/clients");
  }

  addLocation(location: Location){
    return this.http.post(this.baseUrl + "location/add", location);
  }

  deleteLocation(name: String){
    return this.http.get(this.baseUrl + "location/delete/" + name );
  }

  getLocation(name:String){
    return this.http.get(this.baseUrl + "location/" + name + "/get");
  }

  getLocationNamesByCountry(country: String){
    return this.http.get(this.baseUrl + "location/" + country);
  }

  getLocationsNames(){
    return this.http.get(this.baseUrl + "location/locNames");
  }
}
