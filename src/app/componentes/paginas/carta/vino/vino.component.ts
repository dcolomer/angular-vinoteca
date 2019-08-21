import { Component, OnInit, Input } from '@angular/core';
import { Vino } from '../../../../modelos/vino';

@Component({
  selector: 'app-vino',
  templateUrl: './vino.component.html',
  styleUrls: ['./vino.component.css']
})
export class VinoComponent implements OnInit {

  @Input() vino: Vino;

  constructor() { }

  ngOnInit() { }

}
