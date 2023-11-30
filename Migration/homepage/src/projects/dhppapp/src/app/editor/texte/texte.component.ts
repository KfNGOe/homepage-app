import {
  Component,
  OnInit,
  OnDestroy
} from '@angular/core';

import {ActivatedRoute} from "@angular/router";

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
import { Router } from '@angular/router';

import {
  SidebarService
} from "../../shared/sidebar.service";
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'dhpp-app-texte-werke',
  templateUrl: './texte.component.html',
  styleUrls: ['texte.component.scss']
})
export class AppKommissionEditTexteComponent extends BaseComponent implements OnInit, OnDestroy {

  showNavbar = true; // Show navbar on first init

  myTitle = 'project-angular';
  open = false;

  dataModel = ``;

  id = 'home';
  /////////////

  constructor(public accountService: AccountService,
    public loginModalService: LoginModalService, public lightbox: Lightbox, 
    private router: Router,
    private route: ActivatedRoute,
    public navbarService: NavbarService,
    public eventManager: JhiEventManager,
    public sidebarService: SidebarService) {
    super(accountService, loginModalService, eventManager, lightbox);
    this.route.params.subscribe( params => {
      this.id = params.id;
    } );
  }

  ngOnInit() {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;

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
    this.sidebarService.entries['left'] = [
      {
      'title': 'Home',
      'href': '/editor/texte/home'
    },
    {
      'title': 'Kommission/Geschichte',
      'href': '/editor/texte/kommission_geschichte'
    }
  ];

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

  handleChangeEvent(event) {
  //  this.firestore.collection('content').doc(this.id).set({ content: this.dataModel});
  }
  

}
