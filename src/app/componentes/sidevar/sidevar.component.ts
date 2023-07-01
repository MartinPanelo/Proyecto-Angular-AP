import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { ManagerSidevarService } from 'src/app/servicios/manager-sidevar.service';

@Component({
  selector: 'app-sidevar',
  templateUrl: './sidevar.component.html',
  styleUrls: ['./sidevar.component.css']
})
export class SidevarComponent implements OnInit {

  @ViewChild('iddeldrawer') public sidenav?: MatSidenav;

  constructor(private managerS: ManagerSidevarService) { 
  }

  ngOnInit() { 
   this.managerS.sideNavToggleSubject.subscribe(()=> {
      this.sidenav?.toggle();
    });
  } 
}
