import { Component, OnInit, OnDestroy } from '@angular/core';

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
import { group } from '@angular/animations';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { prefix } from '@fortawesome/free-solid-svg-icons';
import { Lightbox } from 'ngx-lightbox';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

export interface AktuelleInformationenAPIEntry {
  title: string;
  date: Date; //humanly formated date
  text: string;
  image: string;
  createDate: number;
  moreLink: string;
}

export interface AktuelleInformationen {
  titel: string;
  date: string;
  year: number;
  dateF: Date;
  text: string;
  fulltext: string;
  pictureref: string;
  moreLink: string;
}

@Component({
  selector: 'dhpp-app-aktuelles',
  templateUrl: './aktuelles.component.html',
  styleUrls: ['aktuelles.component.scss']
})
export class AppAktuellesComponent extends BaseComponent implements OnInit, OnDestroy {
  state$: Observable<object>;
  fakeArray = new Array(4);
  showNavbar = true; // Show navbar on first init
  loading: boolean = true;
  error: string = '';

  testdata: any;
  ida: string;

  items: ['Eintrag 1', 'Eintrag 2', 'Eintrag 3'];

  ///Das folgende sind temporäre Daten, welche später durch informationen von einem post callback ersetzt werden
  aktuelleInformationen: AktuelleInformationen[] = [];

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

  ngOnInit() {
    const aktuellesDataUrl =
      environment.baseDataUrl + environment.editorNames.aktuelles + '/' + environment.editorNames.aktuelles + '.json';

    this.router.routeReuseStrategy.shouldReuseRoute = () => false;

    let id = this.route.snapshot.paramMap.get('id');

    if (!id) {
      id = new Date().getFullYear().toString();
    }

    this.accountService.identity().subscribe((account: Account) => {
      this.account = account;
    });
    this.registerAuthenticationSuccess();
    // this.navbarService.show(); // Show Navbar by default

    this.sidebarService.isVisible['left'] = true;
    this.sidebarService.isVisible['right'] = false;
    this.sidebarService.heading['right'] = '';
    this.sidebarService.heading['left'] = 'Archiv';
    this.sidebarService.entries['left'] = [];

    if (id != null) {
      this.ida = id;
      this.http.get(aktuellesDataUrl).subscribe(
        (result: AktuelleInformationenAPIEntry[]) => {
          this.aktuelleInformationen = this.formatAPIResults(result);
          this.aktuelleInformationen = this.aktuelleInformationen.sort(this.compareValues('dateF', 'desc'));

          var groupedByYear = this.groupArrayOfObjects(this.aktuelleInformationen, 'year');

          //filter by year
          this.aktuelleInformationen = this.aktuelleInformationen.filter((aktuelleInformationen: AktuelleInformationen) => {
            return aktuelleInformationen.year == parseInt(this.ida);
          });

          this.sidebarService.entries['left'] = Object.keys(groupedByYear).map(a => {
            return {
              title: a,
              href: '/aktuelles/' + a
            };
          });

          this.sidebarService.entries['left'] = this.sidebarService.entries['left'].sort(this.compareValues('title', 'desc'));

          this.loading = false;
          this.error = '';
        },
        (err: any) => {
          this.loading = false;
          this.error = err.message;
        }
      );
    } else {
      this.ida = '';
    }
  }

  formatAPIResults(jsonAPI: AktuelleInformationenAPIEntry[]): AktuelleInformationen[] {
    let formatedResults: AktuelleInformationen[] = [];
    for (let entry of jsonAPI) {
      let formatedEntry: AktuelleInformationen = {
        date: this.formatHumanDate(entry.date),
        dateF: entry.date,
        year: new Date(entry.date).getFullYear(),
        fulltext: entry.text,
        text: entry.text.substr(0, 200) + '...',
        moreLink: entry.moreLink,
        pictureref: entry.image,
        titel: entry.title
      };
      formatedResults.push(formatedEntry);
    }

    return formatedResults;
  }

  formatHumanDate(date: Date): string {
    date = new Date(date);
    const year = date.getFullYear();
    const month = this.zerofill(date.getMonth() + 1);
    const day = this.zerofill(date.getDate());

    return day + '.' + month + '.' + year;
  }

  ngOnDestroy() {
    if (this.authSubscription) {
      this.eventManager.destroy(this.authSubscription);
    }
  }

  zerofill(i) {
    return (i < 10 ? '0' : '') + i;
  }

  groupArrayOfObjects(list, key) {
    return list.reduce(function(rv, x) {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {});
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

  getEntity(uri) {
    return uri.substring(uri.lastIndexOf('/') + 1);
  }

  toggleNavbar() {
    this.navbarService.toggleNavbar();
  }
}
