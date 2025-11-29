import {Component, OnInit} from '@angular/core';
import {MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle} from "@angular/material/dialog";
import {MatButtonModule} from '@angular/material/button';
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {ReactiveFormsModule, FormGroup, FormControl, Validators, FormBuilder} from "@angular/forms";
import { MatDialogRef } from '@angular/material/dialog';
import {KeycloakService} from "../../shared/keycloak.service";
import {UserManage} from "../services/user-manage";
import {UserUpdate} from "../../models/UserUpdate";

@Component({
  selector: 'app-update-user',
  imports: [
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatDialogTitle,
    MatButtonModule,
    MatFormField,
    MatInput,
    MatLabel,
    ReactiveFormsModule
  ],
  standalone: true,
  templateUrl: './update-user.html',
  styleUrl: './update-user.css'
})
export class UpdateUser implements OnInit{

  userForm: FormGroup;
  userInfo?: any;
  emails:any = [];
  users:any[] = [];
  isLoggedIn = false;
  role = '';
  roles:any[] = [];
  emailUser:any;


  constructor(private dialogRef: MatDialogRef<UpdateUser>,private fb: FormBuilder,
              private keycloakService: KeycloakService, private userManager: UserManage) {

    this.userForm = this.fb.group({
      firstName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      lastName: new FormControl('', [Validators.required])
    });


  }

  async ngOnInit() {
    await this.
    keycloakService.init();
    this.isLoggedIn = this.keycloakService.isLoggedIn();
    if (this.isLoggedIn) {
      this.userInfo = await this.keycloakService.loadUserProfile();
      this.emailUser = this.userInfo.email;
      console.log(this.userInfo);
      this.roles = this.keycloakService.getRoles();
      this.userForm = this.fb.group({
        firstName: new FormControl(this.userInfo.firstName, [Validators.required]),
        email: new FormControl(this.userInfo.email, [Validators.required, Validators.email]),
        lastName: new FormControl(this.userInfo.lastName, [Validators.required])
      });
      if (this.roles.includes('admin')) this.role='admin';
      if (this.roles.includes('client')) this.role='client';
      if (this.roles.includes('supplier')) this.role='supplier';
      if (this.roles.includes('repairer')) this.role='repairer';
    }

        this.userManager.getUsers().subscribe(
          (users) =>{
            this.users = users;
            this.emails = this.users.map(user => user.email);
          }
        );

  }


  get firstName(){
    return this.userForm.get('firstName');
  }


  get lastName(){
    return this.userForm.get('lastName');
  }

  get email(){
    return this.userForm.get('email');
  }





  update(){
    if(!(this.userForm.value.email != this.emailUser && this.emails.include(this.userForm.value.email))){
      let user = {
        firstName: this.userForm.value.firstName,
        lastName: this.userForm.value.lastName,
        email: this.emailUser,
        newEmail: this.userForm.value.email,
        role: this.role
      }


    }
    else{

    }





  }

  //create a model
  //add confirm box
  //check if the email exist already
  //add notification


}
