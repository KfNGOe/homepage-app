import {
  Component,
  OnInit,
  OnDestroy
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Lightbox } from 'ngx-lightbox';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// The base module exports all classes that are necessary.
import {
  Account,
  AccountService,
  LoginModalService,
  JhiEventManager,
  NavbarService
} from '../../../../../../src/main/webapp/app/shared/base.imports';
// Every Component should inherit from the BaseComponent
import {
  BaseComponent
} from '../../../../../../src/main/webapp/app/shared/base.imports';

import {
  SidebarService
} from "../../shared/sidebar.service";

@Component({
  selector: 'dhpp-app-editor-personen',
  templateUrl: './personen.component.html',
  styleUrls: ['personen.component.scss']
})
export class AppKommissionEditPersonenComponent extends BaseComponent implements OnInit, OnDestroy {

  state$: Observable<object>;

  showNavbar = true; // Show navbar on first init

  myTitle = 'project-angular';
  open = false;

  shape = 'http://localhost:9000/content/ttl/persono-diss.ttl';
  query = 'http://localhost:9000/content/ttl/persono-diss.rq';
  data = 'http://localhost:9000/content/ttl/personi.ttl';
  base = 'https://dhplus.sbg.ac.at/';

  personen = {
    "head" : {
      "vars" : [
        "orcid",
        "label",
        "bioInfo",
        "func",
        "acadDegr",
        "mail"
      ]
    },
    "results" : {
      "bindings" : [
        {
          "acadDegr" : {
            "type" : "literal",
            "value" : "Dr. rer. nat."
          },
          "func" : {
            "type" : "literal",
            "value" : ""
          },
          "mail" : {
            "type" : "literal",
            "value" : ""
          },
          "bioInfo" : {
            "type" : "literal",
            "value" : ""
          },
          "orcid" : {
            "type" : "uri",
            "value" : "http://viaf.org/viaf/8288651"
          },
          "label" : {
            "xml:lang" : "de",
            "type" : "literal",
            "value" : "Kurt Scharr"
          }
        },
        {
          "acadDegr" : {
            "type" : "literal",
            "value" : ""
          },
          "func" : {
            "type" : "literal",
            "value" : ""
          },
          "mail" : {
            "type" : "literal",
            "value" : ""
          },
          "bioInfo" : {
            "xml:lang" : "de",
            "type" : "literal",
            "value" : "Ab 1915 im Referat für Presse und Politik im k.u.k. Armeeoberkommando (AOK); 1925-1938 Diektor des österreichischen Kriegsarchives; 1938 Vizekanzler; 1941-1944 Generalbevollmächtigter für Deutschland in Kroatien; beging Selbstmord"
          },
          "orcid" : {
            "type" : "uri",
            "value" : "http://viaf.org/viaf/22150599"
          },
          "label" : {
            "xml:lang" : "de",
            "type" : "literal",
            "value" : "Edmund Glaise-Horstenau"
          }
        },
        {
          "acadDegr" : {
            "type" : "literal",
            "value" : ""
          },
          "func" : {
            "type" : "literal",
            "value" : ""
          },
          "mail" : {
            "type" : "literal",
            "value" : ""
          },
          "bioInfo" : {
            "xml:lang" : "de",
            "type" : "literal",
            "value" : "Offizier, Historiker, Politiker"
          },
          "orcid" : {
            "type" : "uri",
            "value" : "http://viaf.org/viaf/22150599"
          },
          "label" : {
            "xml:lang" : "de",
            "type" : "literal",
            "value" : "Edmund Glaise-Horstenau"
          }
        },
        {
          "acadDegr" : {
            "type" : "literal",
            "value" : "Prof. Dr."
          },
          "func" : {
            "type" : "literal",
            "value" : ""
          },
          "mail" : {
            "type" : "literal",
            "value" : ""
          },
          "bioInfo" : {
            "xml:lang" : "de",
            "type" : "literal",
            "value" : "Habil.,  Heinrich-Heine-Universität, Düsseldorf; PhD, Heinrich-Heine-Universität, Düsseldorf, 1990. Deutscher Historiker. Professor an der University of Leeds. Docent in history at University of Düsseldorf, 1999-2002"
          },
          "orcid" : {
            "type" : "uri",
            "value" : "http://viaf.org/viaf/30422591"
          },
          "label" : {
            "xml:lang" : "de",
            "type" : "literal",
            "value" : "Holger Afflerbach"
          }
        },
        {
          "acadDegr" : {
            "type" : "literal",
            "value" : ""
          },
          "func" : {
            "type" : "literal",
            "value" : ""
          },
          "mail" : {
            "type" : "literal",
            "value" : ""
          },
          "bioInfo" : {
            "xml:lang" : "de",
            "type" : "literal",
            "value" : "Österr. Dichter; Diplomat; Jurist; Generalintendant des Hoftheaters in Wien"
          },
          "orcid" : {
            "type" : "uri",
            "value" : "http://viaf.org/viaf/97624994"
          },
          "label" : {
            "xml:lang" : "de",
            "type" : "literal",
            "value" : "Leopold Andrian"
          }
        },
        {
          "acadDegr" : {
            "type" : "literal",
            "value" : ""
          },
          "func" : {
            "type" : "literal",
            "value" : ""
          },
          "mail" : {
            "type" : "literal",
            "value" : ""
          },
          "bioInfo" : {
            "xml:lang" : "de",
            "type" : "literal",
            "value" : "Prof. für Österreichische Geschichte an der Universität Innsbruck"
          },
          "orcid" : {
            "type" : "uri",
            "value" : "http://viaf.org/viaf/64300551"
          },
          "label" : {
            "xml:lang" : "de",
            "type" : "literal",
            "value" : "Gunda Barth-Scalmani"
          }
        },
        {
          "acadDegr" : {
            "type" : "literal",
            "value" : "Prof., Dr."
          },
          "func" : {
            "type" : "literal",
            "value" : ""
          },
          "mail" : {
            "type" : "literal",
            "value" : ""
          },
          "bioInfo" : {
            "xml:lang" : "de",
            "type" : "literal",
            "value" : "Promotion Graz 1988, Habil. Göttingen 2000; Forschungsschwerpunkt u.a. Kriminalistik"
          },
          "orcid" : {
            "type" : "uri",
            "value" : "http://viaf.org/viaf/6067618"
          },
          "label" : {
            "xml:lang" : "de",
            "type" : "literal",
            "value" : "Peter Becker"
          }
        },
        {
          "acadDegr" : {
            "type" : "literal",
            "value" : "Dr. phil"
          },
          "func" : {
            "type" : "literal",
            "value" : ""
          },
          "mail" : {
            "type" : "literal",
            "value" : ""
          },
          "bioInfo" : {
            "xml:lang" : "de",
            "type" : "literal",
            "value" : "Österr. Historiker und Geheimdienstspezialist"
          },
          "orcid" : {
            "type" : "uri",
            "value" : "http://viaf.org/viaf/201096935"
          },
          "label" : {
            "xml:lang" : "de",
            "type" : "literal",
            "value" : "Siegfried Beer"
          }
        },
        {
          "acadDegr" : {
            "type" : "literal",
            "value" : ""
          },
          "func" : {
            "type" : "literal",
            "value" : ""
          },
          "mail" : {
            "type" : "literal",
            "value" : ""
          },
          "bioInfo" : {
            "xml:lang" : "de",
            "type" : "literal",
            "value" : "1977-2002 Prof. für Geschichte der Neuzeit und langjähriger Vorstand des Inst. für Geschichte an der Univ. Wien"
          },
          "orcid" : {
            "type" : "uri",
            "value" : "http://viaf.org/viaf/22180073"
          },
          "label" : {
            "xml:lang" : "de",
            "type" : "literal",
            "value" : "Wolfdieter Bihl"
          }
        },
        {
          "acadDegr" : {
            "type" : "literal",
            "value" : ""
          },
          "func" : {
            "type" : "literal",
            "value" : ""
          },
          "mail" : {
            "type" : "literal",
            "value" : ""
          },
          "bioInfo" : {
            "xml:lang" : "de",
            "type" : "literal",
            "value" : "Österr. Archivar u. Historiker"
          },
          "orcid" : {
            "type" : "uri",
            "value" : "http://viaf.org/viaf/95296524"
          },
          "label" : {
            "xml:lang" : "de",
            "type" : "literal",
            "value" : "Ludwig Bittner"
          }
        },
        {
          "acadDegr" : {
            "type" : "literal",
            "value" : ""
          },
          "func" : {
            "type" : "literal",
            "value" : ""
          },
          "mail" : {
            "type" : "literal",
            "value" : ""
          },
          "bioInfo" : {
            "type" : "literal",
            "value" : ""
          },
          "orcid" : {
            "type" : "uri",
            "value" : "http://viaf.org/viaf/29547714"
          },
          "label" : {
            "xml:lang" : "de",
            "type" : "literal",
            "value" : "Emil Brix"
          }
        },
        {
          "acadDegr" : {
            "type" : "literal",
            "value" : "Prof. Dr."
          },
          "func" : {
            "type" : "literal",
            "value" : ""
          },
          "mail" : {
            "type" : "literal",
            "value" : ""
          },
          "bioInfo" : {
            "xml:lang" : "de",
            "type" : "literal",
            "value" : "Professor für Wirtschafts- und Sozialgeschichte an der Universität Wien"
          },
          "orcid" : {
            "type" : "uri",
            "value" : "http://viaf.org/viaf/49347654"
          },
          "label" : {
            "xml:lang" : "de",
            "type" : "literal",
            "value" : "Ernst Bruckmüller"
          }
        },
        {
          "acadDegr" : {
            "type" : "literal",
            "value" : ""
          },
          "func" : {
            "type" : "literal",
            "value" : ""
          },
          "mail" : {
            "type" : "literal",
            "value" : ""
          },
          "bioInfo" : {
            "xml:lang" : "de",
            "type" : "literal",
            "value" : "Geschichtswiss., Archivarin"
          },
          "orcid" : {
            "type" : "uri",
            "value" : "http://viaf.org/viaf/260776"
          },
          "label" : {
            "xml:lang" : "de",
            "type" : "literal",
            "value" : "Anna Coreth"
          }
        },
        {
          "acadDegr" : {
            "type" : "literal",
            "value" : "Univ.-Prof. Mag. Dr."
          },
          "func" : {
            "type" : "literal",
            "value" : ""
          },
          "mail" : {
            "type" : "literal",
            "value" : ""
          },
          "bioInfo" : {
            "type" : "literal",
            "value" : ""
          },
          "orcid" : {
            "type" : "uri",
            "value" : "http://viaf.org/viaf/56708721"
          },
          "label" : {
            "xml:lang" : "de",
            "type" : "literal",
            "value" : "Werner Drobesch"
          }
        },
        {
          "acadDegr" : {
            "type" : "literal",
            "value" : ""
          },
          "func" : {
            "type" : "literal",
            "value" : ""
          },
          "mail" : {
            "type" : "literal",
            "value" : ""
          },
          "bioInfo" : {
            "xml:lang" : "de",
            "type" : "literal",
            "value" : "1920-1934 Minister für Gemeinwirtschaft; Obmann des Austrian Labor Commitee, Herausgeber der Zeitschrift \"Austrian Labor Institute\""
          },
          "orcid" : {
            "type" : "uri",
            "value" : "http://viaf.org/viaf/107081379"
          },
          "label" : {
            "xml:lang" : "de",
            "type" : "literal",
            "value" : "Wilhelm Ellenbogen"
          }
        },
        {
          "acadDegr" : {
            "type" : "literal",
            "value" : ""
          },
          "func" : {
            "type" : "literal",
            "value" : ""
          },
          "mail" : {
            "type" : "literal",
            "value" : ""
          },
          "bioInfo" : {
            "xml:lang" : "de",
            "type" : "literal",
            "value" : "Österreichischer Historiker"
          },
          "orcid" : {
            "type" : "uri",
            "value" : "http://viaf.org/viaf/115907077"
          },
          "label" : {
            "xml:lang" : "de",
            "type" : "literal",
            "value" : "Fritz Fellner"
          }
        },
        {
          "acadDegr" : {
            "type" : "literal",
            "value" : ""
          },
          "func" : {
            "type" : "literal",
            "value" : ""
          },
          "mail" : {
            "type" : "literal",
            "value" : ""
          },
          "bioInfo" : {
            "xml:lang" : "de",
            "type" : "literal",
            "value" : "1848-1916 Kaiser von Österreich-Ungarn, König von Böhmen etc.; seit 1867 Apostolischer König von Ungarn; 1879 Zweibund mit dem Deutschen Reich; 1914 Ultimatum und Kriegserklärung an Serbien, welche den Ersten Weltkrieg auslöste"
          },
          "orcid" : {
            "type" : "uri",
            "value" : "http://viaf.org/viaf/32787948"
          },
          "label" : {
            "xml:lang" : "de",
            "type" : "literal",
            "value" : "Franz Joseph I."
          }
        },
        {
          "acadDegr" : {
            "type" : "literal",
            "value" : ""
          },
          "func" : {
            "type" : "literal",
            "value" : ""
          },
          "mail" : {
            "type" : "literal",
            "value" : ""
          },
          "bioInfo" : {
            "xml:lang" : "de",
            "type" : "literal",
            "value" : "Österr. Historiker, Journalist; Korrespondierendes Mitglied der Akademie der Wissenschaften"
          },
          "orcid" : {
            "type" : "uri",
            "value" : "http://viaf.org/viaf/19821233"
          },
          "label" : {
            "xml:lang" : "de",
            "type" : "literal",
            "value" : "Heinrich Friedjung"
          }
        },
        {
          "acadDegr" : {
            "type" : "literal",
            "value" : ""
          },
          "func" : {
            "type" : "literal",
            "value" : ""
          },
          "mail" : {
            "type" : "literal",
            "value" : ""
          },
          "bioInfo" : {
            "xml:lang" : "de",
            "type" : "literal",
            "value" : "Ass. für Geschichte an den Universitäten Salzburg u. Innsbruck; Schwerpunkt wissenschaftliche Forschung zur Frauengeschichte"
          },
          "orcid" : {
            "type" : "uri",
            "value" : "http://viaf.org/viaf/5075376"
          },
          "label" : {
            "xml:lang" : "de",
            "type" : "literal",
            "value" : "Margret Friedrich"
          }
        },
        {
          "acadDegr" : {
            "type" : "literal",
            "value" : ""
          },
          "func" : {
            "type" : "literal",
            "value" : ""
          },
          "mail" : {
            "type" : "literal",
            "value" : ""
          },
          "bioInfo" : {
            "xml:lang" : "de",
            "type" : "literal",
            "value" : "Österr. Historiker und Jurist; 1945-53 bei der Tiroler Landesregierung tätig; ab 1955 Prof. an der Univ. Innsbruck"
          },
          "orcid" : {
            "type" : "uri",
            "value" : "http://viaf.org/viaf/311733177"
          },
          "label" : {
            "xml:lang" : "de",
            "type" : "literal",
            "value" : "Oswald von Gschließer"
          }
        },
        {
          "acadDegr" : {
            "type" : "literal",
            "value" : "Dr. iur."
          },
          "func" : {
            "type" : "literal",
            "value" : ""
          },
          "mail" : {
            "type" : "literal",
            "value" : ""
          },
          "bioInfo" : {
            "xml:lang" : "de",
            "type" : "literal",
            "value" : "Parteiloser Österr. Sozial- und Wirtschaftspolitiker; 1920-1928 Bundespräsident von Österreich; schrieb auch Mundartgedichte"
          },
          "orcid" : {
            "type" : "uri",
            "value" : "http://viaf.org/viaf/67257032"
          },
          "label" : {
            "xml:lang" : "de",
            "type" : "literal",
            "value" : "Michael Hainisch"
          }
        },
        {
          "acadDegr" : {
            "type" : "literal",
            "value" : ""
          },
          "func" : {
            "type" : "literal",
            "value" : ""
          },
          "mail" : {
            "type" : "literal",
            "value" : ""
          },
          "bioInfo" : {
            "xml:lang" : "de",
            "type" : "literal",
            "value" : "Univ.-Prof. für Neuere Österreichische Geschichte i.R."
          },
          "orcid" : {
            "type" : "uri",
            "value" : "http://viaf.org/viaf/110266575"
          },
          "label" : {
            "xml:lang" : "de",
            "type" : "literal",
            "value" : "Ernst Hanisch"
          }
        },
        {
          "acadDegr" : {
            "type" : "literal",
            "value" : ""
          },
          "func" : {
            "type" : "literal",
            "value" : ""
          },
          "mail" : {
            "type" : "literal",
            "value" : ""
          },
          "bioInfo" : {
            "xml:lang" : "de",
            "type" : "literal",
            "value" : "Dt. Wirtschafts- und Sozialhistoriker"
          },
          "orcid" : {
            "type" : "uri",
            "value" : "http://viaf.org/viaf/17278080"
          },
          "label" : {
            "xml:lang" : "de",
            "type" : "literal",
            "value" : "Herbert Hassinger"
          }
        },
        {
          "acadDegr" : {
            "type" : "literal",
            "value" : "Prof. Dr."
          },
          "func" : {
            "type" : "literal",
            "value" : ""
          },
          "mail" : {
            "type" : "literal",
            "value" : ""
          },
          "bioInfo" : {
            "xml:lang" : "de",
            "type" : "literal",
            "value" : "Lehrstuhl für Allgemeine Geschichte der Neuzeit an der Karl-Franzens-Universität Graz, Studium der Geschichte und Germanistik"
          },
          "orcid" : {
            "type" : "uri",
            "value" : "http://viaf.org/viaf/265204725"
          },
          "label" : {
            "xml:lang" : "de",
            "type" : "literal",
            "value" : "Gabriele Haug-Moritz"
          }
        },
        {
          "acadDegr" : {
            "type" : "literal",
            "value" : "Prof."
          },
          "func" : {
            "type" : "literal",
            "value" : ""
          },
          "mail" : {
            "type" : "literal",
            "value" : ""
          },
          "bioInfo" : {
            "xml:lang" : "de",
            "type" : "literal",
            "value" : "Prof. für Geschichte an der Ludwig-Maximilians-Univ. München. - Forschungsschwerpunkte: Kulturgeschichte der Frühen Neuzeit (1500-1800), Soziologie, Jüdische Geschichte der Neuzeit"
          },
          "orcid" : {
            "type" : "uri",
            "value" : "http://viaf.org/viaf/76596513"
          },
          "label" : {
            "xml:lang" : "de",
            "type" : "literal",
            "value" : "Mark Hengerer"
          }
        },
        {
          "acadDegr" : {
            "type" : "literal",
            "value" : "Dr. phil."
          },
          "func" : {
            "type" : "literal",
            "value" : ""
          },
          "mail" : {
            "type" : "literal",
            "value" : ""
          },
          "bioInfo" : {
            "xml:lang" : "de",
            "type" : "literal",
            "value" : "Prof. für Geschichte an der Ludwig-Maximilians-Univ. München. - Forschungsschwerpunkte: Kulturgeschichte der Frühen Neuzeit (1500-1800), Soziologie, Jüdische Geschichte der Neuzeit"
          },
          "orcid" : {
            "type" : "uri",
            "value" : "http://viaf.org/viaf/76596513"
          },
          "label" : {
            "xml:lang" : "de",
            "type" : "literal",
            "value" : "Mark Hengerer"
          }
        },
        {
          "acadDegr" : {
            "type" : "literal",
            "value" : ""
          },
          "func" : {
            "type" : "literal",
            "value" : ""
          },
          "mail" : {
            "type" : "literal",
            "value" : ""
          },
          "bioInfo" : {
            "type" : "literal",
            "value" : ""
          },
          "orcid" : {
            "type" : "uri",
            "value" : "http://viaf.org/viaf/33113889"
          },
          "label" : {
            "xml:lang" : "de",
            "type" : "literal",
            "value" : "Wolfgang Häusler"
          }
        },
        {
          "acadDegr" : {
            "type" : "literal",
            "value" : ""
          },
          "func" : {
            "type" : "literal",
            "value" : ""
          },
          "mail" : {
            "type" : "literal",
            "value" : ""
          },
          "bioInfo" : {
            "xml:lang" : "de",
            "type" : "literal",
            "value" : "Forschungsschwerpunkte: österreichische, deutsche und britische Politik- und Verfassungsgeschichte des 19. und 20. Jahrhunderts sowie der Dreißigjährige Krieg"
          },
          "orcid" : {
            "type" : "uri",
            "value" : "http://viaf.org/viaf/54164256"
          },
          "label" : {
            "xml:lang" : "de",
            "type" : "literal",
            "value" : "Lothar Höbelt"
          }
        },
        {
          "acadDegr" : {
            "type" : "literal",
            "value" : ""
          },
          "func" : {
            "type" : "literal",
            "value" : ""
          },
          "mail" : {
            "type" : "literal",
            "value" : ""
          },
          "bioInfo" : {
            "xml:lang" : "de",
            "type" : "literal",
            "value" : "Arbeit für das Wiener Stadt- und Landesarchiv, die Stadtarchäologie Wien und das Fernseharchiv des ORF. Seit 2001 Mitarbeiter des Österreichischen Staatsarchivs, seit 2009 Direktor der Abteilung Haus-, Hof- und Staatsarchiv"
          },
          "orcid" : {
            "type" : "uri",
            "value" : "http://viaf.org/viaf/315074024"
          },
          "label" : {
            "xml:lang" : "de",
            "type" : "literal",
            "value" : "Thomas Just"
          }
        },
        {
          "acadDegr" : {
            "type" : "literal",
            "value" : "Dr."
          },
          "func" : {
            "type" : "literal",
            "value" : ""
          },
          "mail" : {
            "type" : "literal",
            "value" : ""
          },
          "bioInfo" : {
            "xml:lang" : "de",
            "type" : "literal",
            "value" : "Forschungen zur Geschichte des älteren Handwerks und zur Frauengeschichte in Sachsen"
          },
          "orcid" : {
            "type" : "uri",
            "value" : "http://viaf.org/viaf/265940586"
          },
          "label" : {
            "xml:lang" : "de",
            "type" : "literal",
            "value" : "Katrin Keller"
          }
        },
        {
          "acadDegr" : {
            "type" : "literal",
            "value" : "Dr."
          },
          "func" : {
            "type" : "literal",
            "value" : ""
          },
          "mail" : {
            "type" : "literal",
            "value" : ""
          },
          "bioInfo" : {
            "xml:lang" : "de",
            "type" : "literal",
            "value" : "Forschungen zur Geschichte des älteren Handwerks und zur Frauengeschichte in Sachsen"
          },
          "orcid" : {
            "type" : "uri",
            "value" : "https://orcid.org/0000-0002-8621-5162"
          },
          "label" : {
            "xml:lang" : "de",
            "type" : "literal",
            "value" : "Katrin Keller"
          }
        },
        {
          "acadDegr" : {
            "type" : "literal",
            "value" : "Dr."
          },
          "func" : {
            "type" : "literal",
            "value" : ""
          },
          "mail" : {
            "type" : "literal",
            "value" : ""
          },
          "bioInfo" : {
            "xml:lang" : "de",
            "type" : "literal",
            "value" : "2001 Habilitation in Wien, danach Hochschullehrerin in Wien"
          },
          "orcid" : {
            "type" : "uri",
            "value" : "http://viaf.org/viaf/265940586"
          },
          "label" : {
            "xml:lang" : "de",
            "type" : "literal",
            "value" : "Katrin Keller"
          }
        },
        {
          "acadDegr" : {
            "type" : "literal",
            "value" : "Dr."
          },
          "func" : {
            "type" : "literal",
            "value" : ""
          },
          "mail" : {
            "type" : "literal",
            "value" : ""
          },
          "bioInfo" : {
            "xml:lang" : "de",
            "type" : "literal",
            "value" : "2001 Habilitation in Wien, danach Hochschullehrerin in Wien"
          },
          "orcid" : {
            "type" : "uri",
            "value" : "https://orcid.org/0000-0002-8621-5162"
          },
          "label" : {
            "xml:lang" : "de",
            "type" : "literal",
            "value" : "Katrin Keller"
          }
        },
        {
          "acadDegr" : {
            "type" : "literal",
            "value" : "Dr."
          },
          "func" : {
            "type" : "literal",
            "value" : ""
          },
          "mail" : {
            "type" : "literal",
            "value" : ""
          },
          "bioInfo" : {
            "xml:lang" : "de",
            "type" : "literal",
            "value" : "Diplom-Lehrerin für Geschichte und Deutsch"
          },
          "orcid" : {
            "type" : "uri",
            "value" : "http://viaf.org/viaf/265940586"
          },
          "label" : {
            "xml:lang" : "de",
            "type" : "literal",
            "value" : "Katrin Keller"
          }
        },
        {
          "acadDegr" : {
            "type" : "literal",
            "value" : "Dr."
          },
          "func" : {
            "type" : "literal",
            "value" : ""
          },
          "mail" : {
            "type" : "literal",
            "value" : ""
          },
          "bioInfo" : {
            "xml:lang" : "de",
            "type" : "literal",
            "value" : "Diplom-Lehrerin für Geschichte und Deutsch"
          },
          "orcid" : {
            "type" : "uri",
            "value" : "https://orcid.org/0000-0002-8621-5162"
          },
          "label" : {
            "xml:lang" : "de",
            "type" : "literal",
            "value" : "Katrin Keller"
          }
        },
        {
          "acadDegr" : {
            "type" : "literal",
            "value" : "Dr."
          },
          "func" : {
            "type" : "literal",
            "value" : ""
          },
          "mail" : {
            "type" : "literal",
            "value" : ""
          },
          "bioInfo" : {
            "xml:lang" : "de",
            "type" : "literal",
            "value" : "Dissertation zum Handwerkeralltag in Leipzig im 15. bis 17. Jahrhundert"
          },
          "orcid" : {
            "type" : "uri",
            "value" : "http://viaf.org/viaf/265940586"
          },
          "label" : {
            "xml:lang" : "de",
            "type" : "literal",
            "value" : "Katrin Keller"
          }
        },
        {
          "acadDegr" : {
            "type" : "literal",
            "value" : "Dr."
          },
          "func" : {
            "type" : "literal",
            "value" : ""
          },
          "mail" : {
            "type" : "literal",
            "value" : ""
          },
          "bioInfo" : {
            "xml:lang" : "de",
            "type" : "literal",
            "value" : "Dissertation zum Handwerkeralltag in Leipzig im 15. bis 17. Jahrhundert"
          },
          "orcid" : {
            "type" : "uri",
            "value" : "https://orcid.org/0000-0002-8621-5162"
          },
          "label" : {
            "xml:lang" : "de",
            "type" : "literal",
            "value" : "Katrin Keller"
          }
        },
        {
          "acadDegr" : {
            "type" : "literal",
            "value" : "Dr."
          },
          "func" : {
            "type" : "literal",
            "value" : ""
          },
          "mail" : {
            "type" : "literal",
            "value" : ""
          },
          "bioInfo" : {
            "xml:lang" : "de",
            "type" : "literal",
            "value" : "1990-1997 Vorsitzende des Leipziger Geschichtsvereins"
          },
          "orcid" : {
            "type" : "uri",
            "value" : "http://viaf.org/viaf/265940586"
          },
          "label" : {
            "xml:lang" : "de",
            "type" : "literal",
            "value" : "Katrin Keller"
          }
        },
        {
          "acadDegr" : {
            "type" : "literal",
            "value" : "Dr."
          },
          "func" : {
            "type" : "literal",
            "value" : ""
          },
          "mail" : {
            "type" : "literal",
            "value" : ""
          },
          "bioInfo" : {
            "xml:lang" : "de",
            "type" : "literal",
            "value" : "1990-1997 Vorsitzende des Leipziger Geschichtsvereins"
          },
          "orcid" : {
            "type" : "uri",
            "value" : "https://orcid.org/0000-0002-8621-5162"
          },
          "label" : {
            "xml:lang" : "de",
            "type" : "literal",
            "value" : "Katrin Keller"
          }
        },
        {
          "acadDegr" : {
            "type" : "literal",
            "value" : "Dr."
          },
          "func" : {
            "type" : "literal",
            "value" : ""
          },
          "mail" : {
            "type" : "literal",
            "value" : ""
          },
          "bioInfo" : {
            "xml:lang" : "de",
            "type" : "literal",
            "value" : "ab 2017 Leiterin des Instituts für Neuzeit- und Zeitgeschichtsforschung der Österreichischen Akademie der Wissenschaften in Wien und Mitglied der Österreichischen Akademie der Wissenschaften"
          },
          "orcid" : {
            "type" : "uri",
            "value" : "http://viaf.org/viaf/265940586"
          },
          "label" : {
            "xml:lang" : "de",
            "type" : "literal",
            "value" : "Katrin Keller"
          }
        },
        {
          "acadDegr" : {
            "type" : "literal",
            "value" : "Dr."
          },
          "func" : {
            "type" : "literal",
            "value" : ""
          },
          "mail" : {
            "type" : "literal",
            "value" : ""
          },
          "bioInfo" : {
            "xml:lang" : "de",
            "type" : "literal",
            "value" : "ab 2017 Leiterin des Instituts für Neuzeit- und Zeitgeschichtsforschung der Österreichischen Akademie der Wissenschaften in Wien und Mitglied der Österreichischen Akademie der Wissenschaften"
          },
          "orcid" : {
            "type" : "uri",
            "value" : "https://orcid.org/0000-0002-8621-5162"
          },
          "label" : {
            "xml:lang" : "de",
            "type" : "literal",
            "value" : "Katrin Keller"
          }
        },
        {
          "acadDegr" : {
            "type" : "literal",
            "value" : ""
          },
          "func" : {
            "type" : "literal",
            "value" : ""
          },
          "mail" : {
            "type" : "literal",
            "value" : ""
          },
          "bioInfo" : {
            "xml:lang" : "de",
            "type" : "literal",
            "value" : "Oberhofmeister von Maria Theresia; Minister; Österr. Politiker und Diplomat; kaiserlicher Staats- und Konferenzminister; Reichshofrat; kurböhmischer Reichstagsgesandter; Gesandter in Holland, Dänemark und Dresden; Oberhofmeister; Oberstkämmerer; Oberhofmarschall; Graf; Fürst seit 1763"
          },
          "orcid" : {
            "type" : "uri",
            "value" : "http://viaf.org/viaf/89001855"
          },
          "label" : {
            "xml:lang" : "de",
            "type" : "literal",
            "value" : "Johann Joseph von Khevenhüller-Metsch"
          }
        },
        {
          "acadDegr" : {
            "type" : "literal",
            "value" : ""
          },
          "func" : {
            "type" : "literal",
            "value" : ""
          },
          "mail" : {
            "type" : "literal",
            "value" : ""
          },
          "bioInfo" : {
            "xml:lang" : "de",
            "type" : "literal",
            "value" : "Prof. am Institut für Geschichte der Universität Graz (seit 1976)"
          },
          "orcid" : {
            "type" : "uri",
            "value" : "http://viaf.org/viaf/24724563"
          },
          "label" : {
            "xml:lang" : "de",
            "type" : "literal",
            "value" : "Grete Walter-Klingenstein"
          }
        },
        {
          "acadDegr" : {
            "type" : "literal",
            "value" : ""
          },
          "func" : {
            "type" : "literal",
            "value" : ""
          },
          "mail" : {
            "type" : "literal",
            "value" : ""
          },
          "bioInfo" : {
            "xml:lang" : "de",
            "type" : "literal",
            "value" : "Südtirolerin, neben der Lehrtätigkeit Forschungen zur Landeskunde Tirols mit den Schwerpunkten Sozialgeschichte, Kirchengeschichte, Literaturgeschichte und Quellenedition"
          },
          "orcid" : {
            "type" : "uri",
            "value" : "http://viaf.org/viaf/49298035"
          },
          "label" : {
            "xml:lang" : "de",
            "type" : "literal",
            "value" : "Erika Kustatscher"
          }
        },
        {
          "acadDegr" : {
            "type" : "literal",
            "value" : ""
          },
          "func" : {
            "type" : "literal",
            "value" : ""
          },
          "mail" : {
            "type" : "literal",
            "value" : ""
          },
          "bioInfo" : {
            "xml:lang" : "de",
            "type" : "literal",
            "value" : "Österr. Staatsmann; Präsident des österreichischen Reichsrats"
          },
          "orcid" : {
            "type" : "uri",
            "value" : "http://viaf.org/viaf/52445225"
          },
          "label" : {
            "xml:lang" : "de",
            "type" : "literal",
            "value" : "Karl Friedrich von Kübeck"
          }
        },
        {
          "acadDegr" : {
            "type" : "literal",
            "value" : "Prof. Dr. phil."
          },
          "func" : {
            "type" : "literal",
            "value" : ""
          },
          "mail" : {
            "type" : "literal",
            "value" : ""
          },
          "bioInfo" : {
            "xml:lang" : "de",
            "type" : "literal",
            "value" : "Österreichischer Romanist; Schwerpunkt: Literatur und Kultur des Renaissance- und Barockzeitalters in Spanien, Hispanoamerika und Brasilien, lateinamerikanische Literatur des 20. Jahrhunderts"
          },
          "orcid" : {
            "type" : "uri",
            "value" : "https://orcid.org/0000-0003-0755-4789"
          },
          "label" : {
            "xml:lang" : "de",
            "type" : "literal",
            "value" : "Christopher F. Laferl"
          }
        },
        {
          "acadDegr" : {
            "type" : "literal",
            "value" : "Prof. Dr. phil."
          },
          "func" : {
            "type" : "literal",
            "value" : ""
          },
          "mail" : {
            "type" : "literal",
            "value" : ""
          },
          "bioInfo" : {
            "xml:lang" : "de",
            "type" : "literal",
            "value" : "Österreichischer Romanist; Schwerpunkt: Literatur und Kultur des Renaissance- und Barockzeitalters in Spanien, Hispanoamerika und Brasilien, lateinamerikanische Literatur des 20. Jahrhunderts"
          },
          "orcid" : {
            "type" : "uri",
            "value" : "http://viaf.org/viaf/32842800"
          },
          "label" : {
            "xml:lang" : "de",
            "type" : "literal",
            "value" : "Christopher F. Laferl"
          }
        },
        {
          "acadDegr" : {
            "type" : "literal",
            "value" : ""
          },
          "func" : {
            "type" : "literal",
            "value" : ""
          },
          "mail" : {
            "type" : "literal",
            "value" : ""
          },
          "bioInfo" : {
            "xml:lang" : "de",
            "type" : "literal",
            "value" : "Stadt- und Landesarchivar; Generaldirektor des Österreichischen Staatsarchivs"
          },
          "orcid" : {
            "type" : "uri",
            "value" : "http://viaf.org/viaf/264643926"
          },
          "label" : {
            "xml:lang" : "de",
            "type" : "literal",
            "value" : "Wolfgang Maderthaner"
          }
        },
        {
          "acadDegr" : {
            "type" : "literal",
            "value" : ""
          },
          "func" : {
            "type" : "literal",
            "value" : ""
          },
          "mail" : {
            "type" : "literal",
            "value" : ""
          },
          "bioInfo" : {
            "type" : "literal",
            "value" : ""
          },
          "orcid" : {
            "type" : "uri",
            "value" : "http://viaf.org/viaf/54687981"
          },
          "label" : {
            "xml:lang" : "de",
            "type" : "literal",
            "value" : "Helene Maimann"
          }
        },
        {
          "acadDegr" : {
            "type" : "literal",
            "value" : ""
          },
          "func" : {
            "type" : "literal",
            "value" : ""
          },
          "mail" : {
            "type" : "literal",
            "value" : ""
          },
          "bioInfo" : {
            "xml:lang" : "de",
            "type" : "literal",
            "value" : "Wiener Historiker mit Forschungen v.a. zum Vormärz und zur Revolution 1848"
          },
          "orcid" : {
            "type" : "uri",
            "value" : "http://viaf.org/viaf/101315557"
          },
          "label" : {
            "xml:lang" : "de",
            "type" : "literal",
            "value" : "Julius Marx"
          }
        },
        {
          "acadDegr" : {
            "type" : "literal",
            "value" : "Prof. Dr."
          },
          "func" : {
            "type" : "literal",
            "value" : ""
          },
          "mail" : {
            "type" : "literal",
            "value" : ""
          },
          "bioInfo" : {
            "xml:lang" : "de",
            "type" : "literal",
            "value" : "Prof. für Österreichische Geschichte an der Univ. Innsbruck (seit 1993)"
          },
          "orcid" : {
            "type" : "uri",
            "value" : "https://orcid.org/0000-0003-2650-543X"
          },
          "label" : {
            "xml:lang" : "de",
            "type" : "literal",
            "value" : "Brigitte Mazohl"
          }
        },
        {
          "acadDegr" : {
            "type" : "literal",
            "value" : "Prof. Dr."
          },
          "func" : {
            "type" : "literal",
            "value" : ""
          },
          "mail" : {
            "type" : "literal",
            "value" : ""
          },
          "bioInfo" : {
            "xml:lang" : "de",
            "type" : "literal",
            "value" : "Prof. für Österreichische Geschichte an der Univ. Innsbruck (seit 1993)"
          },
          "orcid" : {
            "type" : "uri",
            "value" : "http://viaf.org/viaf/220738564"
          },
          "label" : {
            "xml:lang" : "de",
            "type" : "literal",
            "value" : "Brigitte Mazohl"
          }
        },
        {
          "acadDegr" : {
            "type" : "literal",
            "value" : ""
          },
          "func" : {
            "type" : "literal",
            "value" : ""
          },
          "mail" : {
            "type" : "literal",
            "value" : ""
          },
          "bioInfo" : {
            "xml:lang" : "de",
            "type" : "literal",
            "value" : "Österreichischer Haus-, Hof- und Staats- bzw. Reichskanzler"
          },
          "orcid" : {
            "type" : "uri",
            "value" : "http://viaf.org/viaf/49258230"
          },
          "label" : {
            "xml:lang" : "de",
            "type" : "literal",
            "value" : "Klemens Wenzel Lothar von Metternich"
          }
        },
        {
          "acadDegr" : {
            "type" : "literal",
            "value" : "Dr.phil."
          },
          "func" : {
            "type" : "literal",
            "value" : ""
          },
          "mail" : {
            "type" : "literal",
            "value" : ""
          },
          "bioInfo" : {
            "xml:lang" : "de",
            "type" : "literal",
            "value" : "Tätig am Allg. Verwaltungsarchiv (Wien), seit 1994 Generaldirektor des Österr. Staatsarchivs"
          },
          "orcid" : {
            "type" : "uri",
            "value" : "http://viaf.org/viaf/18302682"
          },
          "label" : {
            "xml:lang" : "de",
            "type" : "literal",
            "value" : "Lorenz Mikoletzky"
          }
        },
        {
          "acadDegr" : {
            "type" : "literal",
            "value" : ""
          },
          "func" : {
            "type" : "literal",
            "value" : ""
          },
          "mail" : {
            "type" : "literal",
            "value" : ""
          },
          "bioInfo" : {
            "xml:lang" : "de",
            "type" : "literal",
            "value" : "Österr. Historiker"
          },
          "orcid" : {
            "type" : "uri",
            "value" : "http://viaf.org/viaf/57407173"
          },
          "label" : {
            "xml:lang" : "de",
            "type" : "literal",
            "value" : "Alexander Novotny"
          }
        },
        {
          "acadDegr" : {
            "type" : "literal",
            "value" : ""
          },
          "func" : {
            "type" : "literal",
            "value" : ""
          },
          "mail" : {
            "type" : "literal",
            "value" : ""
          },
          "bioInfo" : {
            "type" : "literal",
            "value" : ""
          },
          "orcid" : {
            "type" : "uri",
            "value" : "http://viaf.org/viaf/64144041"
          },
          "label" : {
            "xml:lang" : "de",
            "type" : "literal",
            "value" : "Hans Petschar"
          }
        },
        {
          "acadDegr" : {
            "type" : "literal",
            "value" : "Dr. phil."
          },
          "func" : {
            "type" : "literal",
            "value" : ""
          },
          "mail" : {
            "type" : "literal",
            "value" : ""
          },
          "bioInfo" : {
            "xml:lang" : "de",
            "type" : "literal",
            "value" : "1907-1918 Reichsratsabgeordneter; 1918 und 1931 Minister für Finanzen; 1931-1936 Deputy Judge am Ständigen Internationalen Gerichtshof im Haag"
          },
          "orcid" : {
            "type" : "uri",
            "value" : "http://viaf.org/viaf/107145857823423020439"
          },
          "label" : {
            "xml:lang" : "de",
            "type" : "literal",
            "value" : "Josef Redlich"
          }
        },
        {
          "acadDegr" : {
            "type" : "literal",
            "value" : "Dr. phil."
          },
          "func" : {
            "type" : "literal",
            "value" : ""
          },
          "mail" : {
            "type" : "literal",
            "value" : ""
          },
          "bioInfo" : {
            "xml:lang" : "de",
            "type" : "literal",
            "value" : "Jurist, Politiker ; Österr. Minister für Finanzen 1931"
          },
          "orcid" : {
            "type" : "uri",
            "value" : "http://viaf.org/viaf/107145857823423020439"
          },
          "label" : {
            "xml:lang" : "de",
            "type" : "literal",
            "value" : "Josef Redlich"
          }
        },
        {
          "acadDegr" : {
            "type" : "literal",
            "value" : "Prof. Dr. phil."
          },
          "func" : {
            "type" : "literal",
            "value" : ""
          },
          "mail" : {
            "type" : "literal",
            "value" : ""
          },
          "bioInfo" : {
            "xml:lang" : "de",
            "type" : "literal",
            "value" : "Prof. für Neuere Geschichte an der Univ. Innsbruck 1981-2009; Gründer und Leiter des Privaten Instituts für Ideengeschichte"
          },
          "orcid" : {
            "type" : "uri",
            "value" : "http://viaf.org/viaf/27080152"
          },
          "label" : {
            "xml:lang" : "de",
            "type" : "literal",
            "value" : "Helmut Reinalter"
          }
        },
        {
          "acadDegr" : {
            "type" : "literal",
            "value" : ""
          },
          "func" : {
            "type" : "literal",
            "value" : ""
          },
          "mail" : {
            "type" : "literal",
            "value" : ""
          },
          "bioInfo" : {
            "type" : "literal",
            "value" : ""
          },
          "orcid" : {
            "type" : "uri",
            "value" : "http://viaf.org/viaf/273770352"
          },
          "label" : {
            "xml:lang" : "de",
            "type" : "literal",
            "value" : "Helmut Rumpler"
          }
        },
        {
          "acadDegr" : {
            "type" : "literal",
            "value" : "Ao. Univ.-Prof., Univ.-Doz., Mag., Dr."
          },
          "func" : {
            "type" : "literal",
            "value" : ""
          },
          "mail" : {
            "type" : "literal",
            "value" : ""
          },
          "bioInfo" : {
            "xml:lang" : "de",
            "type" : "literal",
            "value" : "Prof. für Neuere Geschichte an der Univ. Wien"
          },
          "orcid" : {
            "type" : "uri",
            "value" : "http://viaf.org/viaf/264106169"
          },
          "label" : {
            "xml:lang" : "de",
            "type" : "literal",
            "value" : "Martin Scheutz"
          }
        },
        {
          "acadDegr" : {
            "type" : "literal",
            "value" : "Ao. Univ.-Prof., Univ.-Doz., Mag., Dr."
          },
          "func" : {
            "type" : "literal",
            "value" : ""
          },
          "mail" : {
            "type" : "literal",
            "value" : ""
          },
          "bioInfo" : {
            "xml:lang" : "de",
            "type" : "literal",
            "value" : "Prof. für Neuere Geschichte an der Univ. Wien"
          },
          "orcid" : {
            "type" : "uri",
            "value" : "https://orcid.org/0000-0001-9261-8438"
          },
          "label" : {
            "xml:lang" : "de",
            "type" : "literal",
            "value" : "Martin Scheutz"
          }
        },
        {
          "acadDegr" : {
            "type" : "literal",
            "value" : "Prof. Dr."
          },
          "func" : {
            "type" : "literal",
            "value" : ""
          },
          "mail" : {
            "type" : "literal",
            "value" : ""
          },
          "bioInfo" : {
            "xml:lang" : "de",
            "type" : "literal",
            "value" : "Professor für neuere Geschichte; Leibniz-Preis 1996, Geschichte der frühen Neuzeit, Universität München"
          },
          "orcid" : {
            "type" : "uri",
            "value" : "http://viaf.org/viaf/268355658"
          },
          "label" : {
            "xml:lang" : "de",
            "type" : "literal",
            "value" : "Winfried Schulze"
          }
        },
        {
          "acadDegr" : {
            "type" : "literal",
            "value" : ""
          },
          "func" : {
            "type" : "literal",
            "value" : ""
          },
          "mail" : {
            "type" : "literal",
            "value" : ""
          },
          "bioInfo" : {
            "xml:lang" : "de",
            "type" : "literal",
            "value" : "Österr. Politiker"
          },
          "orcid" : {
            "type" : "uri",
            "value" : "http://viaf.org/viaf/76396145"
          },
          "label" : {
            "xml:lang" : "de",
            "type" : "literal",
            "value" : "Josef Schöner"
          }
        },
        {
          "acadDegr" : {
            "type" : "literal",
            "value" : "Univ.-Prof., Dr. phil., M.A."
          },
          "func" : {
            "type" : "literal",
            "value" : ""
          },
          "mail" : {
            "type" : "literal",
            "value" : ""
          },
          "bioInfo" : {
            "xml:lang" : "de",
            "type" : "literal",
            "value" : "Seit 2003 Universitätsprofessor für Neuere und Österreichische Geschichte an der Universität Klagenfurt; seit 2012 Mitglied der Historischen Kommission bei der Bayerischen Akademie der Wissenschaften"
          },
          "orcid" : {
            "type" : "uri",
            "value" : "http://viaf.org/viaf/64185409"
          },
          "label" : {
            "xml:lang" : "de",
            "type" : "literal",
            "value" : "Reinhard Stauber"
          }
        },
        {
          "acadDegr" : {
            "type" : "literal",
            "value" : "Prof. Dr."
          },
          "func" : {
            "type" : "literal",
            "value" : ""
          },
          "mail" : {
            "type" : "literal",
            "value" : ""
          },
          "bioInfo" : {
            "xml:lang" : "de",
            "type" : "literal",
            "value" : "Themenschwerpunkte: Herrschaftsordnungen, internationale Politik, Diplomatie und Geschichtsdenken in der Frühen Neuzeit"
          },
          "orcid" : {
            "type" : "uri",
            "value" : "https://orcid.org/0000-0002-4077-8840"
          },
          "label" : {
            "xml:lang" : "de",
            "type" : "literal",
            "value" : "Arno Strohmeyer"
          }
        },
        {
          "acadDegr" : {
            "type" : "literal",
            "value" : "Prof. Dr."
          },
          "func" : {
            "type" : "literal",
            "value" : ""
          },
          "mail" : {
            "type" : "literal",
            "value" : ""
          },
          "bioInfo" : {
            "xml:lang" : "de",
            "type" : "literal",
            "value" : "Themenschwerpunkte: Herrschaftsordnungen, internationale Politik, Diplomatie und Geschichtsdenken in der Frühen Neuzeit"
          },
          "orcid" : {
            "type" : "uri",
            "value" : "http://viaf.org/viaf/29753868"
          },
          "label" : {
            "xml:lang" : "de",
            "type" : "literal",
            "value" : "Arno Strohmeyer"
          }
        },
        {
          "acadDegr" : {
            "type" : "literal",
            "value" : "Dr. jur."
          },
          "func" : {
            "type" : "literal",
            "value" : ""
          },
          "mail" : {
            "type" : "literal",
            "value" : ""
          },
          "bioInfo" : {
            "xml:lang" : "de",
            "type" : "literal",
            "value" : "Sektionschef; Forschungen zu den beiden Türkenbelagerungen Wiens"
          },
          "orcid" : {
            "type" : "uri",
            "value" : "http://viaf.org/viaf/3551031"
          },
          "label" : {
            "xml:lang" : "de",
            "type" : "literal",
            "value" : "Walter Sturminger"
          }
        },
        {
          "acadDegr" : {
            "type" : "literal",
            "value" : "Univ. Prof., Dr."
          },
          "func" : {
            "type" : "literal",
            "value" : ""
          },
          "mail" : {
            "type" : "literal",
            "value" : ""
          },
          "bioInfo" : {
            "xml:lang" : "de",
            "type" : "literal",
            "value" : "Schwerpunkt Osteuropäische Geschichte; Historiker"
          },
          "orcid" : {
            "type" : "uri",
            "value" : "http://viaf.org/viaf/269948625"
          },
          "label" : {
            "xml:lang" : "de",
            "type" : "literal",
            "value" : "Arnold Suppan"
          }
        },
        {
          "acadDegr" : {
            "type" : "literal",
            "value" : "Univ.-Prof., Dr."
          },
          "func" : {
            "type" : "literal",
            "value" : ""
          },
          "mail" : {
            "type" : "literal",
            "value" : ""
          },
          "bioInfo" : {
            "xml:lang" : "de",
            "type" : "literal",
            "value" : "Schwerpunkt: Rechtsgeschichte"
          },
          "orcid" : {
            "type" : "uri",
            "value" : "http://viaf.org/viaf/71759796"
          },
          "label" : {
            "xml:lang" : "de",
            "type" : "literal",
            "value" : "Berthold Sutter"
          }
        },
        {
          "acadDegr" : {
            "type" : "literal",
            "value" : "Dr."
          },
          "func" : {
            "type" : "literal",
            "value" : ""
          },
          "mail" : {
            "type" : "literal",
            "value" : ""
          },
          "bioInfo" : {
            "type" : "literal",
            "value" : ""
          },
          "orcid" : {
            "type" : "uri",
            "value" : "http://viaf.org/viaf/261451866"
          },
          "label" : {
            "xml:lang" : "de",
            "type" : "literal",
            "value" : "Werner Telesko"
          }
        },
        {
          "acadDegr" : {
            "type" : "literal",
            "value" : "Dr."
          },
          "func" : {
            "type" : "literal",
            "value" : ""
          },
          "mail" : {
            "type" : "literal",
            "value" : ""
          },
          "bioInfo" : {
            "type" : "literal",
            "value" : ""
          },
          "orcid" : {
            "type" : "uri",
            "value" : "https://orcid.org/0000-0002-1024-8902"
          },
          "label" : {
            "xml:lang" : "de",
            "type" : "literal",
            "value" : "Werner Telesko"
          }
        },
        {
          "acadDegr" : {
            "type" : "literal",
            "value" : ""
          },
          "func" : {
            "type" : "literal",
            "value" : ""
          },
          "mail" : {
            "type" : "literal",
            "value" : ""
          },
          "bioInfo" : {
            "xml:lang" : "de",
            "type" : "literal",
            "value" : "Österreichisch-deutscher Osteuropahistoriker mit Professuren in Wien, Breslau und Berlin; Mitglied der antisemitischen Professorenclique Bärenhöhle, 1933 in Wien Eintritt in die illegale NSDAP, 1945 als politisch belastet in Berlin entlassen, ab 1950 an der Ukrainischen Freien Universität in München tätig, ab 1958 Lehrauftrag in Göttingen"
          },
          "orcid" : {
            "type" : "uri",
            "value" : "http://viaf.org/viaf/15689763"
          },
          "label" : {
            "xml:lang" : "de",
            "type" : "literal",
            "value" : "Hans Uebersberger"
          }
        },
        {
          "acadDegr" : {
            "type" : "literal",
            "value" : "Ao. Univ.-Prof. Univ.-Doz. Dr."
          },
          "func" : {
            "type" : "literal",
            "value" : ""
          },
          "mail" : {
            "type" : "literal",
            "value" : ""
          },
          "bioInfo" : {
            "xml:lang" : "de",
            "type" : "literal",
            "value" : "Lehrt am Institut für Geschichte der Universität Wien"
          },
          "orcid" : {
            "type" : "uri",
            "value" : "http://viaf.org/viaf/264589506"
          },
          "label" : {
            "xml:lang" : "de",
            "type" : "literal",
            "value" : "Karl Vocelka"
          }
        },
        {
          "acadDegr" : {
            "type" : "literal",
            "value" : ""
          },
          "func" : {
            "type" : "literal",
            "value" : ""
          },
          "mail" : {
            "type" : "literal",
            "value" : ""
          },
          "bioInfo" : {
            "xml:lang" : "de",
            "type" : "literal",
            "value" : "Hochschuldozent für Neuere Geschichte"
          },
          "orcid" : {
            "type" : "literal",
            "value" : ""
          },
          "label" : {
            "xml:lang" : "de",
            "type" : "literal",
            "value" : "Georg Christoph Berger Waldenegg"
          }
        },
        {
          "acadDegr" : {
            "type" : "literal",
            "value" : ""
          },
          "func" : {
            "type" : "literal",
            "value" : ""
          },
          "mail" : {
            "type" : "literal",
            "value" : ""
          },
          "bioInfo" : {
            "xml:lang" : "de",
            "type" : "literal",
            "value" : "Forschungsgebiet österr. Verfassungs-, Verwaltungs- u. Wirtschaftsgeschichte"
          },
          "orcid" : {
            "type" : "uri",
            "value" : "http://viaf.org/viaf/152726"
          },
          "label" : {
            "xml:lang" : "de",
            "type" : "literal",
            "value" : "Friedrich Walter"
          }
        },
        {
          "acadDegr" : {
            "type" : "literal",
            "value" : ""
          },
          "func" : {
            "type" : "literal",
            "value" : ""
          },
          "mail" : {
            "type" : "literal",
            "value" : ""
          },
          "bioInfo" : {
            "type" : "literal",
            "value" : ""
          },
          "orcid" : {
            "type" : "uri",
            "value" : "http://viaf.org/viaf/93329944"
          },
          "label" : {
            "xml:lang" : "de",
            "type" : "literal",
            "value" : "Solomon Wank"
          }
        },
        {
          "acadDegr" : {
            "type" : "literal",
            "value" : "Dr."
          },
          "func" : {
            "type" : "literal",
            "value" : ""
          },
          "mail" : {
            "type" : "literal",
            "value" : ""
          },
          "bioInfo" : {
            "xml:lang" : "de",
            "type" : "literal",
            "value" : "forscht in der Dermatologie der Universitätsklinik Hamburg-Eppendorf"
          },
          "orcid" : {
            "type" : "uri",
            "value" : "http://viaf.org/viaf/76963880"
          },
          "label" : {
            "xml:lang" : "de",
            "type" : "literal",
            "value" : "Johannes Wimmer"
          }
        },
        {
          "acadDegr" : {
            "type" : "literal",
            "value" : "Dr."
          },
          "func" : {
            "type" : "literal",
            "value" : ""
          },
          "mail" : {
            "type" : "literal",
            "value" : ""
          },
          "bioInfo" : {
            "xml:lang" : "de",
            "type" : "literal",
            "value" : "Gründer der Beratungsfirma MedServation GmbH"
          },
          "orcid" : {
            "type" : "uri",
            "value" : "http://viaf.org/viaf/76963880"
          },
          "label" : {
            "xml:lang" : "de",
            "type" : "literal",
            "value" : "Johannes Wimmer"
          }
        },
        {
          "acadDegr" : {
            "type" : "literal",
            "value" : "Dr."
          },
          "func" : {
            "type" : "literal",
            "value" : ""
          },
          "mail" : {
            "type" : "literal",
            "value" : ""
          },
          "bioInfo" : {
            "xml:lang" : "de",
            "type" : "literal",
            "value" : "TV- und Internetarzt"
          },
          "orcid" : {
            "type" : "uri",
            "value" : "http://viaf.org/viaf/76963880"
          },
          "label" : {
            "xml:lang" : "de",
            "type" : "literal",
            "value" : "Johannes Wimmer"
          }
        },
        {
          "acadDegr" : {
            "type" : "literal",
            "value" : "Univ.-Prof., Dr."
          },
          "func" : {
            "type" : "literal",
            "value" : ""
          },
          "mail" : {
            "type" : "literal",
            "value" : ""
          },
          "bioInfo" : {
            "xml:lang" : "de",
            "type" : "literal",
            "value" : "Schwerpunkt: österr. Geschichte; Historiker"
          },
          "orcid" : {
            "type" : "uri",
            "value" : "http://viaf.org/viaf/64226635"
          },
          "label" : {
            "xml:lang" : "de",
            "type" : "literal",
            "value" : "Thomas Winkelbauer"
          }
        },
        {
          "acadDegr" : {
            "type" : "literal",
            "value" : ""
          },
          "func" : {
            "type" : "literal",
            "value" : ""
          },
          "mail" : {
            "type" : "literal",
            "value" : ""
          },
          "bioInfo" : {
            "xml:lang" : "de",
            "type" : "literal",
            "value" : "Studium der Geschichte; Promotion; Historiker; Abteilungsleiter Bundeskanzleramt, Wien (2018)"
          },
          "orcid" : {
            "type" : "uri",
            "value" : "http://viaf.org/viaf/208460836"
          },
          "label" : {
            "xml:lang" : "de",
            "type" : "literal",
            "value" : "Helmut Wohnout"
          }
        },
        {
          "acadDegr" : {
            "type" : "literal",
            "value" : ""
          },
          "func" : {
            "type" : "literal",
            "value" : ""
          },
          "mail" : {
            "type" : "literal",
            "value" : ""
          },
          "bioInfo" : {
            "xml:lang" : "de",
            "type" : "literal",
            "value" : "Offizier u. Übersetzer; Übersetzer der Werke Shakespeares; Ausbildung an der Militärakademie u. Schulung zum Generalstabsoffizier an der Wiener Kongressschule; ab 1908 im Generalstab unter dem späteren Feldmarschall Franz Graf Conrad von Hötzendorf"
          },
          "orcid" : {
            "type" : "uri",
            "value" : "http://viaf.org/viaf/81706420"
          },
          "label" : {
            "xml:lang" : "de",
            "type" : "literal",
            "value" : "Theodor von Zeynek"
          }
        }
      ]
    }
  };

  component: any;

  /////////////

  constructor(public accountService: AccountService,
    public loginModalService: LoginModalService, public lightbox: Lightbox, 
    public navbarService: NavbarService,
    public eventManager: JhiEventManager,
    private router: Router,
    public activatedRoute: ActivatedRoute,
    public sidebarService: SidebarService) {
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

    // Hier gibt es eine Auflistung der Personen
    this.sidebarService.entries['left'] = [{
      'title': 'Josef',
      'href': '/editor/personen/ID'
    }];

    this.sidebarService.entries['left'] = this.removeDuplicates(this.personen["results"]["bindings"].map(a => {
      return {
        'title': a.label.value, 'href':  '/editor/personen/' + this.getEntity(a.orcid.value), 'id':  a.orcid.value, 'data': a
      }
    }), it => it.title);
  
    this.component = document.querySelector('dhpc-metadata-editor');

    // Return shape
    this.component.addEventListener('onShapeLoaded', e => {
      console.log((<any>e).detail);
      // window.document.getElementById("shaclshape").innerText = (<any>e).detail;
    });

    // Get Turtle data
    this.component.addEventListener('onTurtleUpdate', e => {
      console.log((<any>e).detail);
      // window.document.getElementById("debug").innerText = (<any>e).detail;
    });

    // Get JSON data
    this.component.addEventListener('onUpdate', e => {
      console.log((<any>e).detail);
    });

    // Return data 
    this.component.addEventListener('onDataLoaded', e => {
      console.log((<any>e).detail);
      // window.document.getElementById("data").innerText = (<any>e).detail;
    });

    // Return query 
    this.component.addEventListener('onQueryLoaded', e => {
      console.log((<any>e).detail);
      // window.document.getElementById("query").innerText = (<any>e).detail;
    });

    // Return query result
    this.component.addEventListener('onQueryResultLoaded', e => {
      console.log((<any>e).detail);
      // window.document.getElementById("queryresult").innerText = (<any>e).detail;
    });
    
    this.state$ = this.activatedRoute.paramMap
    .pipe(map(() => window.history.state))
    
    var self = this;
    this.state$.subscribe(params => {
      if ('id' in params) {
        const id = (<any>params).id;
        // Query and send to web component!!???!!
        setTimeout(function () {
          // Filter personen array
          var ar = [];
          var t = self.personen.results.bindings.filter(p => p.orcid.value === id).map(m => { return { '?orcid': m.orcid, '?P1_is_identified_by_label': m.label, '?P1_is_identified_by_biographicalOrHistoricalInformation': m.bioInfo, '?P1_is_identified_by_functionOrRole': m.func } });
          ar.push(t);
          self.component.queryResult = t;
          self.component.parse();
        }, 1000);
      }
    });

  }

  getEntity(uri) {
    return uri.substring(uri.lastIndexOf('/') + 1);
}

  removeDuplicates(data, key) {
    return [
      ...new Map(data.map(x => [key(x), x])
      ).values()
    ]
  }

  toggle(event) {
    this.open = event.detail;
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
