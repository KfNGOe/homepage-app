import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
  @Input() loading: boolean = false;
  @Input() loadingText: string = 'Lade...';

  constructor() {}

  ngOnInit(): void {}
}
