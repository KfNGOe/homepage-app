import { OnInit, Component } from '@angular/core';

declare const antiSpamMail: any;
@Component({
  selector: 'dhpp-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class DhppFooterComponent implements OnInit {
  constructor() { }

  ngOnInit() { }

  linkDecrypt(l) {
    antiSpamMail.linkDecrypt(l);
  }

}
