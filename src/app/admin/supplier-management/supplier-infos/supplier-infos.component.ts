import {Component, OnInit} from '@angular/core';
import {RouterLink} from "@angular/router";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-supplier-infos',
  standalone: true,
  imports: [
    RouterLink,
    NgForOf
  ],
  templateUrl: './supplier-infos.component.html',
  styleUrl: './supplier-infos.component.css'
})
export class SupplierInfosComponent implements OnInit{
  supplier:any;
  adresses: any[]=[]
  constructor() {
  }

  ngOnInit() {
  }


  confirmDelete() {

  }

  goToUpdate() {

  }
}
