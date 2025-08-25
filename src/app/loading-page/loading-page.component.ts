import {Component, OnInit} from '@angular/core';
import {KeycloakService} from "../shared/keycloak.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-loading-page',
  standalone: true,
  imports: [],
  templateUrl: './loading-page.component.html',
  styleUrl: './loading-page.component.css'
})
export class LoadingPageComponent  implements OnInit{

  roles:string[] = [];

  constructor(private keyloak: KeycloakService, private router: Router) {
  }

  ngOnInit() {
    this.roles = this.keyloak.getRoles();
    console.log(this.roles);}

 access(){

   if(this.roles.includes('admin')){
     console.log(this.roles.includes('admin'))
     this.router.navigate(['/admin']);
   }
   else if(this.roles.includes('supplier')){
     this.router.navigate(['/supplier']);
   }

   else if(this.roles.includes('client')){
     this.router.navigate(['/client']);
   }

   else if(this.roles.includes('repair')){
     this.router.navigate(['/repair']);
   }
   else{
     this.router.navigate(['/**']);
   }
  }




}
