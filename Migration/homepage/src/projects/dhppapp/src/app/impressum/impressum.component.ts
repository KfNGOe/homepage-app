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
  selector: 'dhpp-app-impressum',
  templateUrl: './impressum.component.html',
  styleUrls: ['impressum.component.scss']
})
export class AppImpressumComponent extends BaseComponent implements OnInit, OnDestroy {

  fakeArray = new Array(4);
  showNavbar = true; // Show navbar on first init

  home_content: any;
  testdata: any;

  data = [
    {
      heading1: 'Leitung:',
      heading2: 'Kurt Scharr',
      mail: 'nbjmup;lvsu/tdibssAvjcl/bd/bu'
    },
    {
    heading1: 'Stellvertretung:',
    heading2: 'Brigitte Mazohl',
    mail: 'nbjmup;csjhjuuf/nb{pimAvjcl/bd/bu'
    },
    {
      heading1: 'Stellvertretung:',
      heading2: 'Reinhard Stauber',
      mail: 'nbjmup;Sfjoibse/TubvcfsAbbv/bu'
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
      heading2: 'Christof Aichner',
      mail: 'nbjmup;disjtupg/bjdiofsAvjcl/bd/bu'
    },
    {
      heading1: 'Gründung:',
      heading2: '1897',
      mail: ''
    },
    {
      heading1: 'Organisationsform:',
      heading2: 'Verein (seit 1991)',
      mail: ''
    }
  ];

  c: any;

  items: ["Eintrag 1", "Eintrag 2", "Eintrag 3"];

  constructor(public accountService: AccountService,
              public loginModalService: LoginModalService, public lightbox: Lightbox, 
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

    const sparqlJsonresponse =
      {
        "head": {
          "vars": [
            "subject",
            "predicate",
            "object"
          ]
        },
        "results": {
          "bindings": []
        }
      };
    
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
