import { Component, OnInit, OnDestroy } from '@angular/core';

// The base module exports all classes that are necessary.
import {
  Account,
  AccountService,
  LoginModalService,
  JhiEventManager,
  NavbarService
} from '../../../../../../src/main/webapp/app/shared/base.imports';
// Every Component should inherit from the BaseComponent
import { BaseComponent } from '../../../../../../src/main/webapp/app/shared/base.imports';

import { SidebarService } from '../../shared/sidebar.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Lightbox } from 'ngx-lightbox';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

interface keyable {
  [key: string]: any;
}

export interface MitgliederAPIEntry {
  name: string;
  position: string;
  www: string;
  orcId: string;
  viafId: string;
  pic: string;
  textBio: number;
  createDate: number;
}

@Component({
  selector: 'dhpp-app-kommission-mitglieder',
  templateUrl: './mitglieder.component.html',
  styleUrls: ['mitglieder.component.scss']
})
export class AppKommissionMitgliederComponent extends BaseComponent implements OnInit, OnDestroy {
  fakeArray = new Array(4);
  showNavbar = true; // Show navbar on first init

  loading: boolean = true;
  error: string = '';

  testdata: any;

  items: ['Eintrag 1', 'Eintrag 2', 'Eintrag 3'];

  /////////////

  constructor(
    public accountService: AccountService,
    public loginModalService: LoginModalService,
    private lightbox: Lightbox,
    public navbarService: NavbarService,
    private router: Router,
    private route: ActivatedRoute,
    public eventManager: JhiEventManager,
    public sidebarService: SidebarService,
    private http: HttpClient
  ) {
    super(accountService, loginModalService, eventManager, lightbox);
  }

  vorstandData: MitgliederAPIEntry[] = [];
  data: MitgliederAPIEntry[] = [];

  ngOnInit() {
    const vorstandDataUrl =
      environment.baseDataUrl + environment.editorNames.mitgliederVorstand + '/' + environment.editorNames.mitgliederVorstand + '.json';
    const dataUrl = environment.baseDataUrl + environment.editorNames.mitglieder + '/' + environment.editorNames.mitglieder + '.json';

    this.router.routeReuseStrategy.shouldReuseRoute = () => false;

    // let id = this.route.snapshot.paramMap.get("id");

    this.accountService.identity().subscribe((account: Account) => {
      this.account = account;
    });
    this.registerAuthenticationSuccess();
    // this.navbarService.show(); // Show Navbar by default

    this.sidebarService.isVisible['left'] = false;
    this.sidebarService.isVisible['right'] = false;
    this.sidebarService.heading['left'] = '';
    this.sidebarService.heading['right'] = '';

    var self = this;

    this.http.get(vorstandDataUrl).subscribe(
      (result: MitgliederAPIEntry[]) => {
        console.log(result);
        this.vorstandData = this.sortByRole(result);
        this.loading = false;
      },
      (error: any) => {
        this.error = error.message;
        this.loading = false;
      }
    );
    this.http.get(dataUrl).subscribe(
      (result: MitgliederAPIEntry[]) => {
        console.log(result);
        this.data = result;
        this.loading = false;
      },
      (error: any) => {
        this.error = error.message;
        this.loading = false;
      }
    );
  }

  sortByRole(data) {
    let roles = ['Vorsitz', 'Stellvertretender Vorsitz', 'Kassier', 'Stellvertretender Kassier'];
    return data.sort((a, b) => {
      let aPrio = roles.indexOf(a.position);
      let bPrio = roles.indexOf(b.position);
      if (aPrio == -1) {
        aPrio = 1000;
      }
      if (bPrio == -1) {
        bPrio = 1000;
      }
      return aPrio > bPrio ? 1 : -1;
    });
  }

  // Return true if file exists, false otherwise
  existsFile(url) {
    var http = new XMLHttpRequest();
    http.open('HEAD', url, false);
    http.send();
    return http.status != 404;
  }

  getImage(value) {
    if (this.existsFile(value)) {
      return value;
    } else {
      return false;
    }
  }

  groupArrayOfObjects(list, key) {
    return list.reduce(function(rv, x) {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {});
  }

  getEntity(uri) {
    return uri.substring(uri.lastIndexOf('/') + 1);
  }

  getHashEntity(uri) {
    return uri.substring(uri.lastIndexOf('#') + 1);
  }

  removeDuplicates(data, key) {
    return [...new Map(data.map(x => [key(x), x])).values()];
  }

  ngOnDestroy() {
    if (this.authSubscription) {
      this.eventManager.destroy(this.authSubscription);
    }
  }

  toggleNavbar() {
    this.navbarService.toggleNavbar();
  }

  loadPicture(url: string): string {
    //lade bilder aus dem "images folder"
    return require('./images/' + url); //require wird gebraucht damit webpack beim compilen den richtigen Pfad hat
  }
}
