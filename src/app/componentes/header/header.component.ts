import { Component } from '@angular/core';
import { ManagerSidevarService } from 'src/app/servicios/manager-sidevar.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private managerS: ManagerSidevarService) {

  }

  clickMenu() { 
    this.managerS.toggle();
  }
}
