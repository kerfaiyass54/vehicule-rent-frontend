import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-add-client',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './add-client.component.html',
  styleUrl: './add-client.component.css'
})
export class AddClientComponent {
  newClientForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.newClientForm = this.fb.group({
      name: ['', Validators.required, Validators.minLength(3), Validators.pattern('^[A-Za-z ]+$')],
      cin:['',Validators.required,Validators.pattern('^[0-9]{8}$')],
      mail: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get name(){
    return this.newClientForm.get('name');
  }

  get cin(){
    return this.newClientForm.get('cin');
  }

  get mail(){
    return this.newClientForm.get('mail');
  }

  get password(){
    return this.newClientForm.get('password');
  }



}
