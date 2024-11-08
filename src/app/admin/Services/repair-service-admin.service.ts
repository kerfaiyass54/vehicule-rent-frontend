import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Repair} from "../../models/repair";

@Injectable({
  providedIn: 'root'
})
export class RepairServiceAdminService {
  baseUrl ="http://localhost:8080/repair/";
  constructor(private http: HttpClient) {
  }

  addRepair(repair: Repair,location: String){
    return this.http.post(this.baseUrl + "add?location=" + location, repair);
  }

  deleteRepair(repair: Repair){
    return this.http.get(this.baseUrl + "delete");
  }

  updateRepair(repair: Repair){
    return this.http.post(this.baseUrl + "update",repair);
  }

  getRepair(name:String){
    return this.http.get(this.baseUrl + name + "/get");
  }

  getLocation(name: String){
    return this.http.get(this.baseUrl + "location/" + name);
  }


}
