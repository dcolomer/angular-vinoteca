import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: [`
    div {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      text-align: center;
  `]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
