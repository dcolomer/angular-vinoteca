import { Component, OnInit } from '@angular/core';
import { Vino } from '../../../../modelos/vino';
import { VinoService } from '../../../../servicios/vino.service';
import { PagerService } from '../../../../servicios/pager.service';

@Component({
  selector: 'app-lista-vinos',
  templateUrl: './lista-vinos.component.html',
  styleUrls: []
})
export class ListaVinosComponent implements OnInit {

  vinos: Vino[];
  vinoSelec: Vino;

  pager: any = {}; // Objeto para la info de paginacion
  pagedItems: Vino[]; // Contendrá en cada momento la selección de vinos a mostrar por página

  constructor(private vinoService: VinoService,
              private pagerService: PagerService) { }

  ngOnInit() {
    this.getVinos();
  }

  getVinos(): void {
    this.vinoService.getVinos().subscribe(data => {
          this.vinos = data;
          this.setPage(1);  // Inicializar el paginador para mostrar la página 1
        },
        error => console.log('Error: No se puede recuperar la lista de vinos', error),
        () => console.log('Vinos recuperados correctamente'));
  }

  setPage(page: number) {
    // obtener el paginador a partir del servicio
    this.pager = this.pagerService.getPager(this.vinos.length, page);

    // Obtener los vinos para la página en curso
    this.pagedItems = this.vinos.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }

  selecVino(vino: Vino) {
    this.vinoSelec = vino;
  }
}
