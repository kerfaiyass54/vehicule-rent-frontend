import { Component } from '@angular/core';
import {Location} from "@angular/common";

@Component({
  selector: 'app-not-authorized',
  standalone: true,
  imports: [],
  templateUrl: './not-authorized.component.html',
  styleUrl: './not-authorized.component.css'
})
export class NotAuthorizedComponent {

  constructor(private location: Location) {}

  goBack() {
    this.location.back();
  }
}
