import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterLink, RouterOutlet} from "@angular/router";
import {NbCardModule, NbTabsetModule} from "@nebular/theme";
import {NgOptimizedImage} from "@angular/common";


@Component({
  selector: 'app-admin',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    NbCardModule,
    NbTabsetModule,
    NgOptimizedImage,
    RouterOutlet,
    RouterLink


  ],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {



}
