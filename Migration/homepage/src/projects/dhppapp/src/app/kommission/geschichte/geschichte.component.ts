import {Component, OnInit, OnDestroy, AfterViewInit} from '@angular/core';

// The base module exports all classes that are necessary.
import {
  Account,
  AccountService,
  LoginModalService,
  JhiEventManager,
  NavbarService
} from '../../../../../../src/main/webapp/app/shared/base.imports';
// Every Component should inherit from the BaseComponent
import {BaseComponent} from '../../../../../../src/main/webapp/app/shared/base.imports';

import {SidebarService} from "../../shared/sidebar.service";
import { ActivatedRoute } from '@angular/router';
import { Lightbox } from 'ngx-lightbox';

export interface KommissionInfomationsBlock {  //interface des aktuelle Informationen Blockes
  person: string;
  taetigkeit: string;
  pictureref?: string;
  text: string;
  morelink: any;
}

export interface WorkBlock {
  image: string,
  title: string,
  description: string,
  link1: string,
  link2: string
}

@Component({
  selector: 'dhpp-app-kommission-geschichte',
  templateUrl: './geschichte.component.html',
  styleUrls: ['geschichte.component.scss']
})
export class AppKommissionGeschichteComponent extends BaseComponent implements OnInit, OnDestroy, AfterViewInit {

  fakeArray = new Array(4);
  showNavbar = true; // Show navbar on first init
  private fragment: string;

  testdata: any;

  home_content: any;

  items: ["Eintrag 1", "Eintrag 2", "Eintrag 3"];

  works: WorkBlock[] = [
    {
    image: '/content/images/u277.jpg',
    title: 'Band 91',
    description: 'Fritz Fellner: „… ein wahrhaft patriotisches Werk.“ Die Kommission für Neuere Geschichte Österreichs 1897-2000. Unter Mitarbeit von Franz Adlgasser und Doris Corradini.- Wien-Köln-Weimar: Böhlau, 2001.',
    link1: '',
    link2: ''
  },
    {
      image: '/content/images/u287.jpg',
      title: 'Band 99',
      description: 'Fritz Fellner, Doris Corradini: Österreichische Geschichtswissenschaft im 20. Jahrhundert. Ein biographisch-bibliographisches Lexikon.- Wien-Köln-Weimar: Böhlau, 2006.',
      link1: '',
      link2: ''
    }
  ];

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
              private route: ActivatedRoute,
              public sidebarService: SidebarService) {
    super(accountService, loginModalService, eventManager, lightbox);
  }

  ngOnInit() {
    this.route.fragment.subscribe(fragment => { this.fragment = fragment; });

    this.accountService.identity().subscribe((account: Account) => {
      this.account = account;
    });
    this.registerAuthenticationSuccess();
    // this.navbarService.show(); // Show Navbar by default

    this.sidebarService.isVisible['left'] = true;
    this.sidebarService.isVisible['right'] = false;
    this.sidebarService.heading['left'] = '';
    this.sidebarService.heading['right'] = '';
    this.sidebarService.entries['left'] = [{
      'title': 'Quellen',
      'href': '/kommission/geschichte',
      'anchor': 'quellen'
    }];
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

  ngAfterViewInit(): void {
    try {
      document.querySelector('#' + this.fragment).scrollIntoView();
    } catch (e) { }
  }
}
