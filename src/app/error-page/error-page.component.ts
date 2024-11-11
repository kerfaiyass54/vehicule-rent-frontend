import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import { Location } from '@angular/common';


@Component({
  selector: 'app-error-page',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './error-page.component.html',
  styleUrl: './error-page.component.css'
})
export class ErrorPageComponent {
  constructor(private location: Location) {}

  goBack() {
    this.location.back();
  }

}
