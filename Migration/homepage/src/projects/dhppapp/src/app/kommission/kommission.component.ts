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

export interface KommissionInfomationsBlock {  //interface des aktuelle Informationen Blockes
  person: string;
  taetigkeit: string;
  pictureref?: string;
  text: string;
  morelink: any;
}

@Component({
  selector: 'dhpp-app-kommission',
  templateUrl: './kommission.component.html',
  styleUrls: ['kommission.component.scss']
})
export class AppKommissionComponent extends BaseComponent implements OnInit, OnDestroy {

  fakeArray = new Array(4);
  showNavbar = true; // Show navbar on first init

  testdata: any;

  items: ["Eintrag 1", "Eintrag 2", "Eintrag 3"];

  ///Das folgende sind temporäre Daten, welche später durch informationen von einem post callback ersetzt werden
  KommissionInformationen: KommissionInfomationsBlock[] = [
    {
      person: 'Brigitte Mazohl',
      taetigkeit: 'Vorsitzende',
      text: 'em. Univ. Prof. für österreichische Geschichte an der Universität Innsbruck, Leitung Projekt',
      pictureref: 'u203.png',
      morelink: {
        label: 'Leo Thun',
        href: ''
      }
    },

  ];

  /////////////

  constructor(public accountService: AccountService,
              public loginModalService: LoginModalService, private lightbox: Lightbox, 
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
    this.sidebarService.entries['left'] = [{'title': "Mitglieder", 'href': '/kommission/mitglieder'},{'title': "Geschichte", 'href': '/kommission/geschichte'}];

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
