import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgForOf, NgIf} from "@angular/common";
import {RouterLink} from "@angular/router";
import {ClientServiceAdminService} from "../../Services/client-service-admin.service";
import {LocationServiceAdminService} from "../../Services/location-service-admin.service";
import {SupplierServiceAdminService} from "../../Services/supplier-service-admin.service";

@Component({
  selector: 'app-add-supplier',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf,
    NgIf,
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './add-supplier.component.html',
  styleUrl: './add-supplier.component.css'
})
export class AddSupplierComponent implements OnInit{
  newSupplierForm: FormGroup;

  constructor(private fb: FormBuilder, private supplierService:SupplierServiceAdminService ) {

    this.newSupplierForm = this.fb.group({
      name: new FormControl("",[Validators.required,Validators.pattern("[a-zA-Z ]*")]),
      nationality:new FormControl("",[Validators.required,Validators.pattern("[a-zA-Z ]*")]),
      mail: new FormControl("",[Validators.required,Validators.email]),
      password: new FormControl("",[Validators.required,Validators.minLength(6)]),
      loc: new FormControl("")
    });


  }

  ngOnInit() {}

  get name(){
    return this.newSupplierForm.get('name');
  }

  get nationality(){
    return this.newSupplierForm.get('nationality');
  }

  get mail(){
    return this.newSupplierForm.get('mail');
  }

  get password(){
    return this.newSupplierForm.get('password');
  }


  addSupplier() {
    let supplier: any ={
      suppName: this.newSupplierForm.value.name,
      nationality:this.newSupplierForm.value.nationality,
      email: this.newSupplierForm.value.mail,
      pass: this.newSupplierForm.value.password,
      role: "SUPPLIER",
    }

    this.supplierService.addSupplier(supplier).subscribe(
      ()=>{
        console.log("success");
      }
    )
  }
}
