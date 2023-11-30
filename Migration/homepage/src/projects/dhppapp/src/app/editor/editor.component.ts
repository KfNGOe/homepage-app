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

import '../../../../../src/main/webapp/app/shared/webcomponents/dhpc-example';

import {SidebarService} from "../shared/sidebar.service";
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'dhpp-app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['editor.component.scss']
})
export class AppEditorComponent extends BaseComponent implements OnInit, OnDestroy {

  fakeArray = new Array(4);
  showNavbar = true; // Show navbar on first init

  testdata: any;

  data = [
    {
    heading1: 'Leitung:',
    heading2: 'Dr. Brigitte Mazohl',
    mail: ''
    },
    {
      heading1: 'Stellvertreter:',
      heading2: 'Mag. Dr. Kurt Scharr',
      mail: ''
    },
    {
      heading1: '',
      heading2: 'Dr. Reinhard Stauber',
      mail: ''
    },
    {
      heading1: 'Vorstandsmitglieder:',
      heading2: '9',
      mail: ''
    },
    {
      heading1: 'Mitglieder:',
      heading2: '34',
      mail: ''
    },
    {
      heading1: 'Mitarbeiter:',
      heading2: 'Dr. Christof Aichner',
      mail: ''
    },
    {
      heading1: 'Bestand:',
      heading2: 'seit 1901',
      mail: ''
    },
    {
      heading1: 'Organisationsform:',
      heading2: 'Verein (seit 1991)',
      mail: ''
    }
  ];

  items: ["Eintrag 1", "Eintrag 2", "Eintrag 3"];

  constructor(public accountService: AccountService,
              public loginModalService: LoginModalService, private lightbox: Lightbox, 
              public navbarService: NavbarService,
              public sidebarService: SidebarService,
              public eventManager: JhiEventManager) {
    super(accountService, loginModalService, eventManager, lightbox);
  }

  ngOnInit() {
    this.accountService.identity().subscribe((account: Account) => {
      this.account = account;
    });
    this.registerAuthenticationSuccess();
    // this.navbarService.show(); // Show Navbar by default

    this.sidebarService.isVisible['left'] = false;
    this.sidebarService.isVisible['right'] = true;
    this.sidebarService.heading['right'] = '';
    this.sidebarService.heading['left'] = '';

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
