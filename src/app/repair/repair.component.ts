import { Component } from '@angular/core';

@Component({
  selector: 'app-repair',
  standalone: true,
  imports: [],
  templateUrl: './repair.component.html',
  styleUrl: './repair.component.css'
})
export class RepairComponent {

  mainRoute: any = '/repair';
  list: any[] = [
    {route: '', name: 'Vehicules', drop: true, sublinks : [
        {link: '/repair/ticket', name: 'Tickets'},
        {link: '/repair/demand', name: 'Demands'},
        {link: '/repair/veh-repair', name: 'Repairs'},
      ]}
  ]


}
