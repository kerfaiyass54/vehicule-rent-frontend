import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgIf} from "@angular/common";
import {Router, RouterLink} from "@angular/router";
import {SupplierServiceAdminService} from "../../Services/supplier-service-admin.service";
import {ToastrService} from "ngx-toastr";
import {update} from "@angular-devkit/build-angular/src/tools/esbuild/angular/compilation/parallel-worker";

@Component({
  selector: 'app-update-supplier',
  standalone: true,
    imports: [
        FormsModule,
        NgIf,
        ReactiveFormsModule,
        RouterLink
    ],
  templateUrl: './update-supplier.component.html',
  styleUrl: './update-supplier.component.css'
})
export class UpdateSupplierComponent implements OnInit{
  newSupplierForm: FormGroup;

  constructor(private fb: FormBuilder,
              private supplierService:SupplierServiceAdminService,
              private router: Router,private toastrService:ToastrService ) {
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



  updateSupplier() {

  }

  return() {

  }
}
