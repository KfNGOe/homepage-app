import { Component } from '@angular/core';
import { LeavedhplusModalService } from 'app/shared/leavedhplus/leavedhplus-modal.service';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { VERSION } from 'app/app.constants';

@Component({
  selector: 'dhpp-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.scss']
})
export class FooterComponent {
  today = Date.now();
  version: string;
  modalRef: NgbModalRef;

  constructor(private leavedhplusModalService: LeavedhplusModalService) {
    this.version = VERSION ? 'v' + VERSION : '';
  }

  gotoExtUrl(url: string) {
    // show leave dhplus message
    this.modalRef = this.leavedhplusModalService.open(url);
  }
}
