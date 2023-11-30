import { OnInit, Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'dhpp-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class DhppNavbarComponent implements OnInit {
  isNavbarCollapsed=true;
  searchForm;
  veroeffactive = false;
  kommactive = false;
  
  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.searchForm = this.formBuilder.group({
      search: ''
    });
  }

  ngOnInit() {
    if (this.router.url.startsWith("/kommission")) {
      this.kommactive = true;
    } else if (this.router.url.startsWith("/veroeffentlichungen")) {
      this.veroeffactive = true;
    }
   }
    
}
