import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgClass, NgForOf, NgIf} from "@angular/common";
import {Router, RouterLink} from "@angular/router";
import {ClientServiceAdminService} from "../../Services/client-service-admin.service";
import {} from "@angular/common/http";
import {LocationServiceAdminService} from "../../Services/location-service-admin.service";
import {ToastrService} from "ngx-toastr";
import { trigger, style, animate, transition, state } from '@angular/animations';

@Component({
  selector: 'app-add-client',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf,
    
// TODO: `HttpClientModule` should not be imported into a component directly.
// Please refactor the code to add `provideHttpClient()` call to the provider list in the
// application bootstrap logic and remove the `HttpClientModule` import from this component.
HttpClientModule, NgForOf, NgClass],
  templateUrl: './add-client.component.html',
  styleUrl: './add-client.component.css',
  animations: [
    trigger('fadeSlide', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({ opacity: 0, transform: 'translateY(-20px)' })),
      ]),
    ]),
  ],
})
export class AddClientComponent implements OnInit{


  constructor(private fb: FormBuilder, private clientService:ClientServiceAdminService, private locationService: LocationServiceAdminService, private toastService:ToastrService,private route: Router ) {

  }

  ngOnInit() {

  }

  steps: number = 3;
  currentStep = 1;

  handleStepClick(step: number) {
    this.currentStep = step;
  }

  getProgressWidth(): string {
    return `${((this.currentStep - 1) / (this.steps - 1)) * 100}%`;
  }

  isCompleted(step: number): boolean {
    return step < this.currentStep;
  }

  isCurrent(step: number): boolean {
    return step === this.currentStep;
  }



}
