import { Component, OnInit, OnDestroy, Renderer2 } from '@angular/core';

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

export interface VeroffentlichungenAPIEntry {
  volNr: number;
  name: string;
  mainTitle: string;
  date: number;
  member: string;
  doi: string;
  pdf: string;
  pic: string;
  textCit: string;
  createDate: number;
}

@Component({
  selector: 'dhpp-app-veroeffentlichungen-suche',
  templateUrl: './suche.component.html',
  styleUrls: ['suche.component.scss']
})
export class AppVeroeffentlichungenSucheComponent extends BaseComponent implements OnInit, OnDestroy {
  fakeArray = new Array(4);
  showNavbar = true; // Show navbar on first init

  dataGraph;
  any;

  loading: boolean = true;
  error: string = '';

  elements: any[];
  elementsGrouped: any[];

  id: string;
  thematik: string;
  band: string;

  sucheAutor = undefined;
  sucheTitel = undefined;
  sucheJahr = undefined;
  sucheBand = undefined;
  orFilter = false;
  sort = 'band';

  ///Das folgende sind temporäre Daten, welche später durch informationen von einem post callback ersetzt werden
  ProjekteInformationen: any[] = [];

  werke: any;

  message =
    'Dieses Buch steht derzeit leider noch nicht frei zugänglich zur Verfügung. Für Informationen zum Band und Möglichkeiten der digitalen Verfügbarkeit wenden Sie sich bitte an den Sekretär der Kommission, <a href="mailto:christof.aichner@uibk.ac.at">Christof Aichner</a>.';

  inhalt = 'gesamtreihe';

  groupedWerke = [];

  members = [
    {
      cat: 'Herrscherkorrespondenz',
      member: 'https://dhplus.sbg.ac.at/kngoe/vocabulary#HerrKorr-1',
      title: 'Die Korrespondenz Ferdinands I.'
    },
    {
      cat: 'Herrscherkorrespondenz',
      member: 'https://dhplus.sbg.ac.at/kngoe/vocabulary#HerrKorr-2',
      title: 'Die Korrespondenz Maximilian II.'
    },
    { cat: 'Zentralverwaltung', member: 'https://dhplus.sbg.ac.at/kngoe/vocabulary#ZentrVerw', title: 'Zentralverwaltung' },
    {
      cat: 'Zentralverwaltung',
      member: 'https://dhplus.sbg.ac.at/kngoe/vocabulary#ZentrVerw-1',
      title: '1.Abt.: Von Maximilian I. bis zur Vereinigung der österreichischen und böhmischen Hofkanzlei (1749)'
    },
    {
      cat: 'Zentralverwaltung',
      member: 'https://dhplus.sbg.ac.at/kngoe/vocabulary#ZentrVerw-2',
      title:
        '2.Abt.: Von der Vereinigung der österreichischen und böhmischen Hofkanzlei bis zur Einrichtung der Ministerialverfassung (1749-1848)'
    },
    {
      cat: 'Zentralverwaltung',
      member: 'https://dhplus.sbg.ac.at/kngoe/vocabulary#ZentrVerw-3',
      title: '3.Abt.: Von der Märzrevolution 1848 bis zur Dezemberverfassung 1867'
    },
    { cat: 'Staatsverträge', member: 'https://dhplus.sbg.ac.at/kngoe/vocabulary#OeStVertr', title: 'Staatsverträge' },
    { cat: 'Außenpolitik', member: 'https://dhplus.sbg.ac.at/kngoe/vocabulary#AusPol', title: 'Außenpolitik' },
    { cat: 'Selbstzeugnisse', member: 'https://dhplus.sbg.ac.at/kngoe/vocabulary#SelbstZeug-1', title: '17. Jahrhundert' },
    {
      cat: 'Selbstzeugnisse',
      member: 'https://dhplus.sbg.ac.at/kngoe/vocabulary#SelbstZeug-2',
      title: '18. bis Mitte des 19. Jahrhunderts'
    },
    {
      cat: 'Selbstzeugnisse',
      member: 'https://dhplus.sbg.ac.at/kngoe/vocabulary#SelbstZeug-3',
      title: 'Spätes 19. Jahrhundert bis zum Ende des Ersten Weltkriegs'
    },
    {
      cat: 'Selbstzeugnisse',
      member: 'https://dhplus.sbg.ac.at/kngoe/vocabulary#SelbstZeug-4',
      title: 'Erste Republik, Zweiter Weltkrieg, Zweite Republik'
    },
    { cat: 'Editionen und Nachschlagewerke', member: 'https://dhplus.sbg.ac.at/kngoe/vocabulary#NwerkeEdit-1', title: 'Nachschlagewerke' },
    { cat: 'Editionen und Nachschlagewerke', member: 'https://dhplus.sbg.ac.at/kngoe/vocabulary#NwerkeEdit-2', title: 'Neuere Editionen' },
    { cat: 'Monographien', member: 'https://dhplus.sbg.ac.at/kngoe/vocabulary#Mono', title: 'Monographien' }
  ];

  categories = [];

  /////////////

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public accountService: AccountService,
    public loginModalService: LoginModalService,
    private lightbox: Lightbox,
    public navbarService: NavbarService,
    public eventManager: JhiEventManager,
    private renderer: Renderer2,
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
    /* this.sidebarService.entries['left'] = this.removeDuplicates(this.members.map(i => {
      return { 'title': i.cat, 'href': '/veroeffentlichungen/gesamtreihe/' + i.cat }
    }), k => k.title);
*/

    this.categories = this.removeDuplicates(
      this.members.map(i => {
        return { title: i.cat, href: '/veroeffentlichungen/gesamtreihe/' + i.cat };
      }),
      k => k.title
    );
    this.sidebarService.entries['left'] = [{ title: 'Übersicht', href: '/veroeffentlichungen/uebersicht' }];

    this.id = this.route.snapshot.params['id'];

    this.thematik = this.route.snapshot.queryParams['thematik'];
    this.band = this.route.snapshot.queryParams['band'];

    if (this.band !== undefined) {
      this.sucheBand = this.band;
    }

    if (this.thematik !== undefined) {
      this.inhalt = this.thematik;
    }

    var self = this;

    const VeroffentlichungenDataUrl =
      environment.baseDataUrl + environment.editorNames.veroeffentlichungen + '/' + environment.editorNames.veroeffentlichungen + '.json';

    this.http.get(VeroffentlichungenDataUrl).subscribe(
      (result: VeroffentlichungenAPIEntry[]) => {
        if (this.sort === 'inhalt') {
          this.werke = result.map(m => {
            // var id = ((m.volNr?.value !== undefined && m.volNr?.value != '') ? parseInt(this.removeBand(m.volNr?.value)) : 0) + "";
            var id = this.uuidv4();

            return {
              id: self.hashCode(id),
              idalt: self.hashCode(id),
              band: m.volNr !== undefined && m.volNr != 0 ? parseInt(this.removeBand(m.volNr)) : 0,
              autor: m.name !== undefined && m.name != '' ? m.name : '',
              name: m.name !== undefined && m.name != '' ? m.name : '',
              vorname: self.getName(m.name !== undefined && m.name != '' ? m.name : '', 0),
              nachname: self.getName(m.name !== undefined && m.name != '' ? m.name : '', 1),
              titel: self.cleanString(m.mainTitle),
              cit: m.textCit,
              publikationsdatum: m.date !== undefined ? m.date : '',
              // 'verleger': m.publ,
              doi: m.doi,
              pdf: m.pdf,
              pic: m.pic,
              member: m.member,
              reihe: this.members
                .filter(f => f.member === m.member)
                .map(m => {
                  return m.cat;
                })[0],
              reihetitel: this.members
                .filter(f => f.member === m.member)
                .map(m => {
                  return m.title;
                })[0]
            };
          });
        } else {
          /* this.werke = this.removeDuplicates(this.workRdf.results.bindings.map(m => {
        // var id = ((m.volNr?.value !== undefined && m.volNr?.value != '') ? parseInt(this.removeBand(m.volNr?.value)) : 0) + "";
        var id = ((m.volNr?.value !== undefined && m.volNr?.value != '') ? m.volNr?.value : this.uuidv4());

      return {
        'id': self.hashCode(id),
        'band': (m.volNr?.value !== undefined && m.volNr?.value != '') ? parseInt(this.removeBand(m.volNr?.value)) : 0,
        'autor': (m.name?.value !== undefined && m.name?.value != '') ? m.name?.value : '',
        'vorname': self.getName(((m.name?.value !== undefined && m.name?.value != '') ? m.name?.value : ''),0),
        'nachname': self.getName(((m.name?.value !== undefined && m.name?.value != '') ? m.name?.value : ''), 1),
        'titel': self.cleanString(m.mainTitle.value),
        'cit': m.cit.value,
        'publikationsdatum': (m.date?.value !== undefined) ? m.date.value: '',
        // 'verleger': m.publ.value,
        'doi': m.doi.value,
        'pdf': m.pdf.value,
        'pic': m.pic.value,
        'member': m.member.value,
        'reihe': (this.members.filter(f => f.member === m.member.value).map(m => { return m.cat }))[0],
        'reihetitel': (this.members.filter(f => f.member === m.member.value).map(m => { return m.title }))[0]
      }
    }), k => k.id);  */

          this.werke = result.map(m => {
            // var id = ((m.volNr?.value !== undefined && m.volNr?.value != '') ? parseInt(this.removeBand(m.volNr?.value)) : 0) + "";
            var id = m.volNr !== undefined && m.volNr != 0 ? m.volNr : this.uuidv4();
            var idalt = m.volNr + '_' + m.name;

            return {
              id: self.hashCode(id),
              idalt: self.hashCode(idalt),
              band: m.volNr !== undefined && m.volNr != 0 ? parseInt(this.removeBand(m.volNr)) : 0,
              autor: m.name !== undefined && m.name != '' ? m.name : '',
              name: m.name !== undefined && m.name != '' ? m.name : '',
              vorname: self.getName(m.name !== undefined && m.name != '' ? m.name : '', 0),
              nachname: self.getName(m.name !== undefined && m.name != '' ? m.name : '', 1),
              titel: self.cleanString(m.mainTitle),
              cit: m.textCit,
              publikationsdatum: m.date !== undefined ? m.date : '',
              // 'verleger': m.publ,
              doi: m.doi,
              pdf: m.pdf,
              pic: m.pic,
              member: m.member,
              reihe: this.members
                .filter(f => f.member === m.member)
                .map(m => {
                  return m.cat;
                })[0],
              reihetitel: this.members
                .filter(f => f.member === m.member)
                .map(m => {
                  return m.title;
                })[0]
            };
          });
        }

        this.filterAndSort();
        this.loading = false;
      },
      error => {
        this.loading = false;
        this.error = error.message;
      }
    );
  }

  ngOnDestroy() {
    if (this.authSubscription) {
      this.eventManager.destroy(this.authSubscription);
    }
  }

  uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = (Math.random() * 16) | 0,
        v = c == 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }

  hashCode(str) {
    /* return str.split('').reduce((prevHash, currVal) =>
      (((prevHash << 5) - prevHash) + currVal.charCodeAt(0))|0, 0); */
    //convert to string if number
    if (typeof str === 'number') {
      str = str.toString();
    }

    var hash = 5381,
      i = str.length;
    while (i) hash = (hash * 33) ^ str.charCodeAt(--i);
    return hash >>> 0;
  }

  getName(value, position) {
    if (value != '') {
      var temp = value.split(' ');
      if (temp.length > 0) {
        return temp[position];
      }
    }
    return value;
  }

  // Return true if file exists, false otherwise
  existsFile(url) {
    var http = new XMLHttpRequest();
    http.open('HEAD', url, false);
    http.send();
    return http.status != 404;
  }

  removeBand(value) {
    try {
      var b = value.toString().replaceAll('Band', '');
      b = b.replaceAll(' ', '');
      return b;
    } catch (e) {}
    return value;
  }

  cleanString(value) {
    var cleanedString = value.replaceAll('<<', '');
    cleanedString = cleanedString.replaceAll('>>', '');
    return cleanedString;
  }

  getImage(value) {
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

  modelSearchChangeFn(value) {
    // if (value.length > 0) {
    //   this.filterAndSort();
    // }

    // if (value.length == 0) {
    // reset
    this.filterAndSort();
    // }
  }

  filterAndSort() {
    // Filter Werke
    var self = this;
    var filteredWerke = this.werke.filter(function(w) {
      if (self.orFilter) {
        if (self.inhalt === 'gesamtreihe') {
          return (
            w.titel.toLowerCase().includes(self.sucheTitel.toLowerCase()) ||
            w.publikationsdatum.includes(self.sucheJahr) ||
            w.autor.toLowerCase().includes(self.sucheAutor.toLowerCase())
          );
        } else {
          return (
            w.reihe.toLowerCase() === self.inhalt.toLowerCase() ||
            w.titel.toLowerCase().includes(self.sucheTitel.toLowerCase()) ||
            w.publikationsdatum.includes(self.sucheJahr) ||
            w.autor.toLowerCase().includes(self.sucheAutor.toLowerCase())
          );
        }
      } else {
        // Beziehe die Felder nur ein wenn length > 3
        var t = false;
        var j = false;
        var a = false;
        var b = false;
        var i = false;

        if (self.sucheTitel !== undefined && self.sucheTitel.length > 3) {
          t = true;
        }

        if (self.sucheJahr !== undefined && self.sucheJahr.length >= 4) {
          j = true;
        }

        if (self.sucheAutor !== undefined && self.sucheAutor.length > 3) {
          a = true;
        }

        if (self.sucheBand !== undefined && self.sucheBand.length > 0) {
          b = true;
        }

        if (self.inhalt !== 'gesamtreihe') {
          i = true;
        }

        return (
          (t ? w.titel.toLowerCase().includes(self.sucheTitel.toLowerCase()) : true) &&
          (j ? w.publikationsdatum.includes(self.sucheJahr) : true) &&
          (a ? w.autor.toLowerCase().includes(self.sucheAutor.toLowerCase()) : true) &&
          (b ? w.band == self.sucheBand : true) &&
          (i && w.reihe !== undefined ? w.reihe.toLowerCase() === self.inhalt.toLowerCase() : i && w.reihe === undefined ? false : true)
        );
      }
    });

    // wenn autor dann duplikate lassen
    if (this.sort !== 'autor') {
      var filtererdWerkeWoDupl = this.removeDuplicates(
        filteredWerke.map(m => {
          return m;
        }),
        k => k.id
      );
      filteredWerke = filtererdWerkeWoDupl;
    } else {
      var filtererdWerkeWoDupl = this.removeDuplicates(
        filteredWerke.map(m => {
          return m;
        }),
        k => k.idalt
      );

      filteredWerke = filtererdWerkeWoDupl;
    }

    self.groupedWerke = [];

    this.members.map(w => {
      if (!(w.member in self.groupedWerke)) {
        self.groupedWerke[w.member] = [];
      }
      var e = self.groupedWerke[w.member];

      var filteredWerkeS = filteredWerke.filter(fw => fw.member === w.member);
      //  var filteredWerkeSorted;

      /*      if (this.sort === 'titel') {
        filteredWerkeSorted = filteredWerkeS.sort(this.compareValues(this.sort, 'asc'));
      } else if (this.sort === 'autor') {
        this.sort = 'name';

        var filteredWoAuthor = filteredWerkeS.filter(m => m.name === '');
        var filteredWAuthor = filteredWerkeS.filter(m => m.name !== '');

        var filteredWerke2 = filteredWoAuthor.sort(this.compareValues('band'));
        var filteredWerke1 = filteredWAuthor.sort(this.compareValues(this.sort, 'asc'));

        filteredWerkeSorted = filteredWerke1.concat(filteredWerke2);
      } else {
        filteredWerkeSorted = filteredWerkeS.sort(this.compareValues(this.sort));
      } */

      var filteredWerkeSorted = filteredWerkeS.sort(this.compareValues(this.sort));

      var filteredWerkeP = filteredWerkeSorted.map(function(w) {
        return {
          image: w.pic !== '' ? w.pic : false,
          // image: (w.band !== undefined) ? false : false,
          title: w.band,
          description: self.cleanString(w.cit),
          link1: w.doi,
          link2: '/pdf/' + w.pdf
        };
      });

      self.groupedWerke[w.member] = e.concat(filteredWerkeP);
    });

    if (this.sort === 'titel') {
      filteredWerke = filteredWerke.sort(this.compareValues(this.sort, 'asc'));
    } else if (this.sort === 'autor') {
      this.sort = 'name';

      var filteredWoAuthor = filteredWerke.filter(m => m.name === '');
      var filteredWAuthor = filteredWerke.filter(m => m.name !== '');

      var filteredWerke2 = filteredWoAuthor.sort(this.compareValues('band'));
      var filteredWerke1 = filteredWAuthor.sort(this.compareValues(this.sort, 'asc'));

      filteredWerke = filteredWerke1.concat(filteredWerke2);
    } else {
      filteredWerke = filteredWerke.sort(this.compareValues(this.sort));
    }

    var self = this;

    var filteredAndSortedWerke = filteredWerke.map(function(w) {
      return {
        image: w.pic !== '' ? w.pic : false,
        // image: (w.band !== undefined) ? false : false,
        title: w.band,
        description: self.cleanString(w.cit),
        link1: w.doi,
        link2: '/pdf/' + w.pdf
      };
    });
    this.elements = filteredAndSortedWerke;
    this.elementsGrouped = this.groupedWerke;
  }

  sortBy(event, sort) {
    this.sort = sort;
    const hasClass = event.target.classList.contains('filterbuttonactive');

    if (hasClass) {
      this.renderer.removeClass(event.target, 'filterbuttonactive');
    } else {
      var els = document.querySelectorAll('.filterbuttonactive');
      for (var i = 0; i < els.length; i++) {
        els[i].classList.remove('filterbuttonactive');
      }
      this.renderer.addClass(event.target, 'filterbuttonactive');
    }

    this.filterAndSort();
  }

  compareValues(key, order = 'desc') {
    return function innerSort(a, b) {
      if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
        // property doesn't exist on either object
        return 0;
      }

      const varA = typeof a[key] === 'string' ? a[key].toUpperCase() : a[key];
      const varB = typeof b[key] === 'string' ? b[key].toUpperCase() : b[key];

      let comparison = 0;
      if (varA > varB) {
        comparison = 1;
      } else if (varA < varB) {
        comparison = -1;
      }
      return order === 'desc' ? comparison * -1 : comparison;
    };
  }

  removeDuplicates(data, key) {
    return [...new Map(data.map(x => [key(x), x])).values()];
  }

  toggleNavbar() {
    this.navbarService.toggleNavbar();
  }

  loadPicture(url: string): string {
    //lade bilder aus dem "images folder"
    return require('../images/' + url); //require wird gebraucht damit webpack beim compilen den richtigen Pfad hat
  }
}
