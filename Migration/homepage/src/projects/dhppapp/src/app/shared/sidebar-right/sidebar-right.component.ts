import { OnInit, Component } from '@angular/core';
import { environment } from '../../../environments/environment';
import { SidebarService } from '../sidebar.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'dhpp-sidebar-right',
  templateUrl: './sidebar-right.component.html',
  styleUrls: ['./sidebar-right.component.scss']
})
export class DhppSidebarRightComponent implements OnInit {
  constructor(public sidebarService: SidebarService, private http: HttpClient) {}

  ///Das folgende sind temporäre Daten, welche später durch informationen von einem post callback ersetzt werden
  AktuelleInformationen: any = [];

  ngOnInit() {
    const aktuellesDataUrl =
      environment.baseDataUrl + environment.editorNames.aktuelles + '/' + environment.editorNames.aktuelles + 'Stripped.json';

    this.http.get(aktuellesDataUrl).subscribe((result: any[]) => {
      this.AktuelleInformationen = result;

      //sort array by date
      this.AktuelleInformationen.sort((a, b) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      });

      //cut array to n elements
      let size = 5;
      if (this.AktuelleInformationen.length > size) {
        this.AktuelleInformationen = this.AktuelleInformationen.slice(0, size);
      }

      for (let i = 0; i < this.AktuelleInformationen.length; i++) {
        this.AktuelleInformationen[i].year = new Date(this.AktuelleInformationen[i].date).getFullYear();
      }
      console.log(this.AktuelleInformationen);
    });
  }
}
