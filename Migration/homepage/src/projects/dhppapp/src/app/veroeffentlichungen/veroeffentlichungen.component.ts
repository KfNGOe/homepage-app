import {Component, OnInit, OnDestroy} from '@angular/core';

// The base module exports all classes that are necessary.
import {
  Account,
  AccountService,
  LoginModalService,
  JhiEventManager,
  NavbarService
} from '../../../../../src/main/webapp/app/shared/base.imports';
// Every Component should inherit from the BaseComponent
import {BaseComponent} from '../../../../../src/main/webapp/app/shared/base.imports';

import {SidebarService} from "../shared/sidebar.service";
import { Lightbox } from 'ngx-lightbox';


@Component({
  selector: 'dhpp-app-veroeffentlichungen',
  templateUrl: './veroeffentlichungen.component.html',
  styleUrls: ['veroeffentlichungen.component.scss']
})
export class AppVeroeffentlichungenComponent extends BaseComponent implements OnInit, OnDestroy {

  fakeArray = new Array(4);
  showNavbar = true; // Show navbar on first init


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
    this.sidebarService.entries['left'] = [{'title': "Übersicht", 'href': '/veroeffentlichungen/uebersicht'},{'title': "Suche", 'href': '/veroeffentlichungen/suche'}];
  }

  ngOnDestroy() {
    if (this.authSubscription) {
      this.eventManager.destroy(this.authSubscription);
    }
  }

  toggleNavbar() {
    this.navbarService.toggleNavbar();
  }

  loadPicture(url: string): string {  //lade bilder aus dem "images folder"
    return require('./images/' + url); //require wird gebraucht damit webpack beim compilen den richtigen Pfad hat
  }
}
