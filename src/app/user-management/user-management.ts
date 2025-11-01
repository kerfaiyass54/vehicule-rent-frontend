import { Component } from '@angular/core';
import {MatTab, MatTabGroup} from "@angular/material/tabs";

@Component({
  selector: 'app-user-management',
  imports: [
    MatTabGroup,
    MatTab
  ],
  standalone: true,
  templateUrl: './user-management.html',
  styleUrl: './user-management.css'
})
export class UserManagement {

}
