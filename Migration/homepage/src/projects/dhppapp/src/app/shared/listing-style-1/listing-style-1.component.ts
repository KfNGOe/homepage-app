import {OnInit, Component, Input} from '@angular/core';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
 
declare const antiSpamMail: any;

@Component({
  selector: 'dhpp-listing-style-1',
  templateUrl: './listing-style-1.component.html',
  styleUrls: ['./listing-style-1.component.scss']
})
export class DhppListingStyle1Component implements OnInit {
  faEnvelope = faEnvelope;
  _element: any;
  @Input() set element(value: any) {
    this._element = value;
  }

  constructor() { }

  ngOnInit() { }

  linkDecrypt(l) {
    antiSpamMail.linkDecrypt(l);
  }
}
