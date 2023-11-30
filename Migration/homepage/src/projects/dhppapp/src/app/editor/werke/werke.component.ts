import {
  Component,
  OnInit,
  OnDestroy
} from '@angular/core';

// The base module exports all classes that are necessary.
import {
  Account,
  AccountService,
  LoginModalService,
  JhiEventManager,
  NavbarService
} from '../../../../../../src/main/webapp/app/shared/base.imports';
// Every Component should inherit from the BaseComponent
import {
  BaseComponent
} from '../../../../../../src/main/webapp/app/shared/base.imports';

import {
  SidebarService
} from "../../shared/sidebar.service";

import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'dhpp-app-editor-werke',
  templateUrl: './werke.component.html',
  styleUrls: ['werke.component.scss']
})
export class AppKommissionEditWerkeComponent extends BaseComponent implements OnInit, OnDestroy {

  showNavbar = true; // Show navbar on first init

  myTitle = 'project-angular';
  open = false;

  shape = 'http://localhost:9000/content/ttl/worko-diss.ttl';
  query = 'http://localhost:9000/content/ttl/worko-diss.rq';
  data = 'http://localhost:9000/content/ttl/worki.ttl';
  base = 'https://dhplus.sbg.ac.at/';

  /////////////

  constructor(public accountService: AccountService,
    public loginModalService: LoginModalService, public lightbox: Lightbox, 
    public navbarService: NavbarService,
    public eventManager: JhiEventManager,
    public sidebarService: SidebarService) {
    super(accountService, loginModalService, eventManager, lightbox);
  }

  ngOnInit() {
    this.accountService.identity().subscribe((account: Account) => {
      this.account = account;
    });
    this.registerAuthenticationSuccess();
    // this.navbarService.show(); // Show Navbar by default

    this.sidebarService.isVisible['left'] = true;
    this.sidebarService.isVisible['right'] = false;
    this.sidebarService.heading['left'] = '';
    this.sidebarService.heading['right'] = '';

    // Hier gibt es eine Auflistung der Personen
    this.sidebarService.entries['left'] = [{
      'title': 'Josef',
      'href': '/#/editor/personen/ID'
    }];

    const component = document.querySelector('dhpc-metadata-editor');

    // Return shape
    component.addEventListener('onShapeLoaded', e => {
      // window.document.getElementById("shaclshape").innerText = (<any>e).detail;
    });

    // Get Turtle data
    component.addEventListener('onTurtleUpdate', e => {
      // window.document.getElementById("debug").innerText = (<any>e).detail;
    });

    // Get JSON data
    component.addEventListener('onUpdate', e => {
      console.log((<any>e).detail);
    });

    // Return data 
    component.addEventListener('onDataLoaded', e => {
      // window.document.getElementById("data").innerText = (<any>e).detail;
    });

    // Return query 
    component.addEventListener('onQueryLoaded', e => {
      // window.document.getElementById("query").innerText = (<any>e).detail;
    });

    // Return query result
    component.addEventListener('onQueryResultLoaded', e => {
      // window.document.getElementById("queryresult").innerText = (<any>e).detail;
    }); 

    
   // Get Home-Content from Firebase
   //this.firestore.collection('shapes').doc('werke').get().subscribe((doc) => {
   // (<any>component).shapeContent = (<any>doc).data().content;
  //})
  }

  toggle(event) {
    console.log(event);
    this.open = event.detail;
  }
  ngOnDestroy() {
    if (this.authSubscription) {
      this.eventManager.destroy(this.authSubscription);
    }
  }

  toggleNavbar() {
    this.navbarService.toggleNavbar();
  }

  

}
