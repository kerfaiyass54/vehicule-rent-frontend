import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserManage {

  baseUrlKeycloak = "http://localhost:8100/keycloak/"

  constructor(private http:HttpClient) {}


  createUser(user: any){
    return this.http.post<any>(this.baseUrlKeycloak, user);
  }

  getUsers(){
    return this.http.get<any[]>(this.baseUrlKeycloak + "users");
  }

  deleteUser(id: any, role: any, email:any){
    return this.http.delete<any>(this.baseUrlKeycloak + "user/" + id + "/" + role + "/" + email);
  }

  updatePassword(id: any, password: any){
    return this.http.put<any>(this.baseUrlKeycloak + "user/" + id + "/password", password);
  }

  getRoles(){
    return this.http.get<any[]>(this.baseUrlKeycloak + "roles");
  }

  updateUser(userId: any, updateUser: any){
    return this.http.put<any>(this.baseUrlKeycloak + "user/" + userId + "/update", updateUser);
  }



}
