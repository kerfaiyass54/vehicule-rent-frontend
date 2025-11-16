import {Component} from '@angular/core';
import {UserManagement} from "../../user-management/user-management";




@Component({
  selector: 'app-admin-details',
  standalone: true,
  imports: [
    UserManagement
  ],
  templateUrl: './admin-details.component.html',
  styleUrl: './admin-details.component.css'
})
export class AdminDetailsComponent {



}
