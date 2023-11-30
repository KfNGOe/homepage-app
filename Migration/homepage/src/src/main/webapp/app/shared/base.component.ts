import { Subscription } from 'rxjs';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

import { JhiEventManager, Account, AccountService, LoginModalService } from './base.imports';
import { Lightbox } from 'ngx-lightbox';

export class BaseComponent {
  account: Account;
  authSubscription: Subscription;
  modalRef: NgbModalRef;

  constructor(public accountService: AccountService, public loginModalService: LoginModalService, public eventManager: JhiEventManager, public lightBox: Lightbox) {}

  registerAuthenticationSuccess() {
    this.authSubscription = this.eventManager.subscribe('authenticationSuccess', () => {
      this.accountService.identity().subscribe(account => {
        this.account = account;
      });
    });
  }

  isAuthenticated() {
    return this.accountService.isAuthenticated();
  }

  login() {
    this.modalRef = this.loginModalService.open();
  }

  openLightbox(item: any) {
    this.lightBox.open([{src: item.pictureref, caption: item.picturecaption, thumb: item.pictureref}], 0);
  }

  openLightboxSingle(src: string, caption: string) {
    this.lightBox.open([{src: src, caption: caption, thumb: src}], 0);
  }

  close() {
    this.lightBox.close();
  }

}
