import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-clients-info',
  standalone: true,
    imports: [
        RouterLink
    ],
  templateUrl: './clients-info.component.html',
  styleUrl: './clients-info.component.css'
})
export class ClientsInfoComponent {

}
