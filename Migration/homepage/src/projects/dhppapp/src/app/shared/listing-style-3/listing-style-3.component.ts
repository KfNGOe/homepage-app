import { OnInit, Component, Input } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { templateJitUrl } from '@angular/compiler';
declare const antiSpamMail: any;

@Component({
  selector: 'dhpp-listing-style-3',
  templateUrl: './listing-style-3.component.html',
  styleUrls: ['./listing-style-3.component.scss']
})
export class DhppListingStyle3Component implements OnInit {
  showModal = false;
  pdfDataUrl = environment.pdfDataUrl;

  _message: any;
  @Input() set message(value: any) {
    this._message = value;
  }

  _element: any;
  @Input() set element(value: any) {
    this._element = value;
  }

  colSize: any;

  _showIcons: true;
  @Input() set showIcons(value: any) {
    this._showIcons = value;
    this.colSize = value === true ? 'col-lg-6 col-12' : 'col-lg-8 col-8';
  }

  constructor(private http: HttpClient) {}

  ngOnInit() {}

  linkDecrypt(l) {
    antiSpamMail.linkDecrypt(l);
  }

  // Return true if file exists, false otherwise
  existsFile(url) {
    var http = new XMLHttpRequest();
    http.open('HEAD', url, false);
    http.send();
    return http.status != 404;
  }

  hideFulltext() {
    this.showModal = false;
  }

  linkto(link) {
    // Check if file exists
    console.log(link);
    if (link.startsWith('/')) {
      if (this.existsFile(window.location.origin + link)) {
        window.open(window.location.origin + link, '_blank');
      } else {
        this.showModal = true;
      }
    } else {
      window.open(link, '_blank');
    }
  }

  downloadPdf(link) {
    // get filename from link
    let filename = link.substring(link.lastIndexOf('/') + 1).trim();

    if (filename == '') {
      this.showModal = true;
      return;
    }

    if (!filename.endsWith('.pdf')) {
      filename += '.pdf';
    }

    // get pdf link
    const pdfLink = environment.pdfDataUrl + filename;

    //get repo name
    const repo = pdfLink.split('/')[4];
    //get owner name
    const owner = pdfLink.split('/')[3];
    //get path
    const path = pdfLink.split('/main/')[1];

    //check if file exists
    this.checkFileExistence(owner, repo, path).then(res => {
      if (res) {
        window.open(pdfLink, '_blank');
      } else {
        this.showModal = true;
      }
    });

    //script to retrief the lfs link from github according to the following article: https://gist.github.com/fkraeutli/66fa741d9a8c2a6a238a01d17ed0edc5
    //this is not working currently because there is not github api support for lfs
    // Check if file exists
    /*if (this.existsFile(pdfLink)) {
           this.http.get(pdfLink, { responseType: 'text' }).subscribe(res => {
        let lines = res.split('\n');
        let oid = lines[1].split(' ')[1].replace('sha256:', '');
        let size = lines[2].split(' ')[1];
        console.log(oid);
        console.log(size);

        let lfsJSON = {
          operation: 'download',
          transfer: ['basic'],
          objects: [{ oid: oid, size: size }]
        };

        let organisation = pdfLink.split('/')[3];
        let repository = pdfLink.split('/')[4];

        let lfsUrl = `https://github.com/${organisation}/${repository}.git/info/lfs/objects/batch`;

        console.log(lfsUrl);
        console.log(lfsJSON);

        this.http
          .post(lfsUrl, lfsJSON, { headers: { Accept: 'application/vnd.git-lfs+json', 'Content-type': 'application/json' } })
          .subscribe(res => {
            console.log(res);
          });
      });
     } else {
      this.showModal = true;
    } */
  }

  checkFileExistence(owner: string, repo: string, path: string): Promise<boolean> {
    const apiUrl = `https://api.github.com/repos/${owner}/${repo}/contents/${path}`;
    return this.http
      .get(apiUrl)
      .toPromise()
      .then(() => true)
      .catch(() => false);
  }
}
