import { Component, OnInit, OnDestroy, Input } from '@angular/core';

// The base module exports all classes that are necessary.
import {
  Account,
  AccountService,
  LoginModalService,
  JhiEventManager,
  NavbarService
} from '../../../../../src/main/webapp/app/shared/base.imports';
// Every Component should inherit from the BaseComponent
import { BaseComponent } from '../../../../../src/main/webapp/app/shared/base.imports';

import '../../../../../src/main/webapp/app/shared/webcomponents/dhpc-example';

import { SidebarService } from '../shared/sidebar.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Lightbox } from 'ngx-lightbox';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

export interface projekteAPIEntry {
  title: string;
  text: string;
  fulltext: string;
  kontaktTitle: string;
  kontaktEmail: string;
  textInfos: string;
  pic: string;
  pictureCaption: string;
  createDate: number;
}

@Component({
  selector: 'dhpp-app-projekte',
  templateUrl: './projekte.component.html',
  styleUrls: ['projekte.component.scss']
})
export class AppProjekteComponent extends BaseComponent implements OnInit, OnDestroy {
  faEnvelope = faEnvelope;

  showModal: boolean;

  fakeArray = new Array(4);
  showNavbar = true; // Show navbar on first init

  loading: boolean = true;
  error: string = '';

  testdata: any;

  id: string;
  title: string;
  fulltext: string;
  kontakt: any;
  kontakt2: any;

  items: ['Eintrag 1', 'Eintrag 2', 'Eintrag 3'];

  elements: any[];

  ///Das folgende sind temporäre Daten, welche später durch informationen von einem post callback ersetzt werden
  ProjekteInformationen: any[] = [
    {
      id: 'Laufende',
      heading: 'Laufende Projekte',
      items: []
    },
    {
      id: 'Assoziierte',
      heading: 'Derzeit Assoziierte Projekte',
      items: []
    },
    {
      id: 'Abgeschlossene',
      heading: 'Abgeschlossene Projekte',
      items: []
    }
  ];

  /////////////

  constructor(
    public accountService: AccountService,
    private route: ActivatedRoute,
    private router: Router,
    public loginModalService: LoginModalService,
    public lightbox: Lightbox,
    public navbarService: NavbarService,
    public eventManager: JhiEventManager,
    public sidebarService: SidebarService,
    private http: HttpClient
  ) {
    super(accountService, loginModalService, eventManager, lightbox);
  }

  ngOnInit() {
    const abgeschlosseneDataUrl =
      environment.baseDataUrl +
      environment.editorNames.projekteAbgeschlossen +
      '/' +
      environment.editorNames.projekteAbgeschlossen +
      '.json';

    const assoziierteDataUrl =
      environment.baseDataUrl + environment.editorNames.projekteAssoziierte + '/' + environment.editorNames.projekteAssoziierte + '.json';

    const laufendDataUrl =
      environment.baseDataUrl + environment.editorNames.projekteLaufend + '/' + environment.editorNames.projekteLaufend + '.json';

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
    this.sidebarService.entries['left'] = this.ProjekteInformationen.map(i => {
      return { title: i.id, href: '/projekte/' + i.id };
    });

    this.id = this.route.snapshot.params['id'];

    let finishedLoads = 0; // counts the amount of files that successfully loaded

    this.http.get(abgeschlosseneDataUrl).subscribe(
      (result: projekteAPIEntry[]) => {
        this.ProjekteInformationen[2].items = result;
        this.applyFilter();
        finishedLoads++;
        if (finishedLoads == 3) this.loading = false; // if all files are loaded, stop loading animation
      },
      (error: any) => {
        this.error = error.message;
        this.loading = false;
      }
    );

    this.http.get(assoziierteDataUrl).subscribe(
      (result: projekteAPIEntry[]) => {
        this.ProjekteInformationen[1].items = result;
        this.applyFilter();
        finishedLoads++;
        if (finishedLoads == 3) this.loading = false; // if all files are loaded, stop loading animation
      },
      (error: any) => {
        this.error = error.message;
        this.loading = false;
      }
    );

    this.http.get(laufendDataUrl).subscribe(
      (result: projekteAPIEntry[]) => {
        this.ProjekteInformationen[0].items = result;
        this.applyFilter();
        finishedLoads++;
        if (finishedLoads == 3) this.loading = false; // if all files are loaded, stop loading animation
      },
      (error: any) => {
        this.error = error.message;
        this.loading = false;
      }
    );
  }

  ngOnDestroy() {
    if (this.authSubscription) {
      this.eventManager.destroy(this.authSubscription);
    }
  }

  applyFilter() {
    console.log(this.ProjekteInformationen);
    if (this.id !== undefined) {
      this.elements = this.ProjekteInformationen.filter(f => f.id === this.id);
    } else {
      this.elements = this.ProjekteInformationen;
    }
  }

  mapToLightbox(item: any) {
    return { pictureref: item.pic, picturecaption: item.pictureCaption };
  }

  toggleNavbar() {
    this.navbarService.toggleNavbar();
  }

  loadPicture(url: string): string {
    //lade bilder aus dem "images folder"
    return require('./images/' + url); //require wird gebraucht damit webpack beim compilen den richtigen Pfad hat
  }

  showFulltext(item: projekteAPIEntry) {
    this.title = item.title;
    this.fulltext = item.fulltext;
    this.kontakt = [{ title: item.kontaktTitle, email: item.kontaktEmail }];
    this.showModal = true;
  }

  hideFulltext() {
    this.showModal = false;
  }
}
