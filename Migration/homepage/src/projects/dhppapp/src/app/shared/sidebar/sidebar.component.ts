import { OnInit, Component } from '@angular/core';
import {SidebarService} from "../sidebar.service";

@Component({
  selector: 'dhpp-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class DhppSidebarComponent implements OnInit {
  constructor(public sidebarService: SidebarService) { }

  ngOnInit() { }

}
