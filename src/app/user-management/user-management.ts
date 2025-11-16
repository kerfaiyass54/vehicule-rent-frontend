import { Component } from '@angular/core';
import {MatTab, MatTabGroup} from "@angular/material/tabs";
import {AccountInfo} from "./account-info/account-info";

@Component({
  selector: 'app-user-management',
  imports: [
    MatTabGroup,
    MatTab,
    AccountInfo
  ],
  standalone: true,
  templateUrl: './user-management.html',
  styleUrl: './user-management.css'
})
export class UserManagement {

}
