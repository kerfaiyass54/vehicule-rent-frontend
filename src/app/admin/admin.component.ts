import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {NavBarAdminComponent} from "./nav-bar-admin/nav-bar-admin.component";
import {FooterAppComponent} from "../footer-app/footer-app.component";

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [
    RouterOutlet,
    NavBarAdminComponent,
    FooterAppComponent,
  ],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {



}
