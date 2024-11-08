import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Supplier} from "../../models/supplier";

@Injectable({
  providedIn: 'root'
})
export class SupplierServiceAdminService {
  baseUrl ="http://localhost:8080/supp/";

  constructor(private http: HttpClient) {}

  addSupplier(supplier: Supplier){
    return this.http.post("add",supplier);
  }

  updateSupplier(supplier: Supplier){
    return this.http.put("update",supplier);
  }

  deleteSupplier(supplier: Supplier){
    return this.http.post("delete",supplier);
  }

  getSupplier(name: String){
    return this.http.get("supplier/" + name);
  }

}
