import { OnInit, Component, Input } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'dhpp-listing-style-4',
  templateUrl: './listing-style-4.component.html',
  styleUrls: ['./listing-style-4.component.scss']
})
export class DhppListingStyle4Component implements OnInit {
  fulltext = false;

  _element: any;
  @Input() set element(value: any) {
    this._element = value;
  }

  colSize: any;

  _showIcons: true;
  @Input() set showIcons(value: any) {
    this._showIcons = value;
    this.colSize = value === true ? 'col-6' : 'col-8';
  }

  constructor(public lightbox: Lightbox) {}

  ngOnInit() {}

  showMessage(l) {
    console.log(l);
  }

  openLightbox(item: any) {
    this.lightbox.open([{ src: item.pictureref, caption: item.picturecaption, thumb: item.pictureref }], 0);
  }

  mapToLightbox(item: any) {
    return { pictureref: item.pictureref, picturecaption: item.titel };
  }
}
