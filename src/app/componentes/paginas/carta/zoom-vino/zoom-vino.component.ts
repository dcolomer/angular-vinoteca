import { Component, OnInit, Input } from '@angular/core';
import { Vino } from '../../../../modelos/vino';

@Component({
  selector: 'app-zoom-vino',
  templateUrl: './zoom-vino.component.html',
  styleUrls: ['./zoom-vino.component.css']
})
export class ZoomVinoComponent implements OnInit {

  @Input() vinoSelec: Vino;

  constructor() { }

  ngOnInit() { }

}
