import {OnInit, Component, Input} from '@angular/core';
import { BaseComponent } from 'app/shared/base.component';

@Component({
  selector: 'dhpp-listing-style-2',
  templateUrl: './listing-style-2.component.html',
  styleUrls: ['./listing-style-2.component.scss']
})
export class DhppListingStyle2Component implements OnInit {

  _element: any;
  @Input() set element(value: any) {
    this._element = value;
  }

  constructor() { }

  ngOnInit() { }

}
