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
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { VeroffentlichungenAPIEntry } from '../suche/suche.component';

interface keyable {
  [key: string]: any;
}

@Component({
  selector: 'dhpp-app-veroeffentlichungen-gesamtreihe',
  templateUrl: './gesamtreihe.component.html',
  styleUrls: ['gesamtreihe.component.scss']
})
export class AppVeroeffentlichungenGesamtreiheComponent extends BaseComponent implements OnInit, OnDestroy {
  fakeArray = new Array(4);
  showNavbar = true; // Show navbar on first init

  elements: any[];

  message =
    'Dieses Buch steht derzeit leider noch nicht frei zugänglich zur Verfügung. Für Informationen zum Band und Möglichkeiten der digitalen Verfügbarkeit wenden Sie sich bitte an den Sekretär der Kommission, <a href="mailto:christof.aichner@uibk.ac.at">Christof Aichner</a>.';
  id: string;

  ProjekteInformationen = [];

  members = [
    { cat: 'Herrscherkorrespondenz', member: 'https://dhplus.sbg.ac.at/kngoe/vocabulary#HerrKorr-1' },
    { cat: 'Herrscherkorrespondenz', member: 'https://dhplus.sbg.ac.at/kngoe/vocabulary#HerrKorr-2' },
    { cat: 'Zentralverwaltung', member: 'https://dhplus.sbg.ac.at/kngoe/vocabulary#ZentrVerw' },
    { cat: 'Zentralverwaltung', member: 'https://dhplus.sbg.ac.at/kngoe/vocabulary#ZentrVerw-1' },
    { cat: 'Zentralverwaltung', member: 'https://dhplus.sbg.ac.at/kngoe/vocabulary#ZentrVerw-2' },
    { cat: 'Zentralverwaltung', member: 'https://dhplus.sbg.ac.at/kngoe/vocabulary#ZentrVerw-3' },
    { cat: 'Staatsverträge', member: 'https://dhplus.sbg.ac.at/kngoe/vocabulary#OeStVertr' },
    { cat: 'Außenpolitik', member: 'https://dhplus.sbg.ac.at/kngoe/vocabulary#AusPol' },
    { cat: 'Selbstzeugnisse', member: 'https://dhplus.sbg.ac.at/kngoe/vocabulary#SelbstZeug-1' },
    { cat: 'Selbstzeugnisse', member: 'https://dhplus.sbg.ac.at/kngoe/vocabulary#SelbstZeug-2' },
    { cat: 'Selbstzeugnisse', member: 'https://dhplus.sbg.ac.at/kngoe/vocabulary#SelbstZeug-3' },
    { cat: 'Selbstzeugnisse', member: 'https://dhplus.sbg.ac.at/kngoe/vocabulary#SelbstZeug-4' },
    { cat: 'Editionen und Nachschlagewerke', member: 'https://dhplus.sbg.ac.at/kngoe/vocabulary#NwerkeEdit-1' },
    { cat: 'Editionen und Nachschlagewerke', member: 'https://dhplus.sbg.ac.at/kngoe/vocabulary#NwerkeEdit-2' },
    { cat: 'Monographien', member: 'https://dhplus.sbg.ac.at/kngoe/vocabulary#Mono' }
  ];

  /////////////

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public accountService: AccountService,
    public loginModalService: LoginModalService,
    private lightbox: Lightbox,
    public navbarService: NavbarService,
    public eventManager: JhiEventManager,
    private http: HttpClient,
    public sidebarService: SidebarService
  ) {
    super(accountService, loginModalService, eventManager, lightbox);
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
    this.sidebarService.entries['left'] = this.removeDuplicates(
      this.members.map(i => {
        return { title: i.cat, href: '/veroeffentlichungen/gesamtreihe/' + i.cat };
      }),
      k => k.title
    );

    this.id = this.route.snapshot.params['id'];

    var self = this;

    this.members.map(m => {
      self.ProjekteInformationen[m.cat] = { items: Array<keyable>() };
    });

    const VeroffentlichungenDataUrl =
      environment.baseDataUrl + environment.editorNames.veroeffentlichungen + '/' + environment.editorNames.veroeffentlichungen + '.json';

    this.http.get(VeroffentlichungenDataUrl).subscribe((result: VeroffentlichungenAPIEntry[]) => {
      this.members.map(m => {
        let items = self.ProjekteInformationen[m.cat].items;
        let newitems = result
          .filter(f => f.member === m.member)
          .map(d => {
            return {
              category: m.cat,
              volnr: d.volNr,
              pdf: d.pdf,
              // image: '',
              image: d.pic != '' ? d.pic : false,
              title: self.cleanString(d.volNr),
              description: self.cleanString(d.textCit),
              link1: d.doi,
              link2: '/pdf/' + d.pdf
            };
          });

        let newitems1 = self.removeDuplicates(newitems, it => it.title);

        self.ProjekteInformationen[m.cat].items = [...items, ...newitems1];
      });

      // Hole Bilder für ausgewählte Kategorie
      let newitems2 = this.ProjekteInformationen[this.id].items.map(d => {
        return {
          category: (<any>d).category,
          image: false,
          title: (<any>d).title,
          description: (<any>d).description,
          link1: (<any>d).link1,
          link2: (<any>d).link2
        };
      });
      this.elements = newitems2;
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
    if (value === false) return false;

    try {
      var v = value.toString().replaceAll('Band', '');
      v = v.replaceAll(' ', '');
      v = v.replaceAll('.pdf', '');

      var url = '/content/images/' + v;
      var url2 = '/content/images/' + v + '.png';

      // if (this.existsFile(url)) {
      return url;
      // } else if (this.existsFile(url2)) {
      //   return url2;
      // } else {
      //   return false;
      // }
    } catch (e) {
      return false;
    }
  }

  ngOnDestroy() {
    if (this.authSubscription) {
      this.eventManager.destroy(this.authSubscription);
    }
  }

  toggleNavbar() {
    this.navbarService.toggleNavbar();
  }

  removeDuplicates(data, key) {
    return [...new Map(data.map(x => [key(x), x])).values()];
  }

  cleanString(value) {
    var cleanedString = value.replaceAll('<<', '');
    cleanedString = cleanedString.replaceAll('>>', '');
    return cleanedString;
  }

  loadPicture(url: string): string {
    //lade bilder aus dem "images folder"
    return require('../images/' + url); //require wird gebraucht damit webpack beim compilen den richtigen Pfad hat
  }
}
