import { Injectable } from '@angular/core';

@Injectable()
export class PagerService {

  constructor() { }

  getPager(totalItems: number, currentPage: number = 1, pageSize: number = 9) {
    // Calcular el total de páginas
    const totalPages = Math.ceil(totalItems / pageSize);

    // Asegurar que la página actual no está fuera del rango
    if (currentPage < 1) {
      currentPage = 1;
    } else if (currentPage > totalPages) {
      currentPage = totalPages;
    }

    let startPage: number;
    let endPage: number;

    if (totalPages <= 10) {
      // Si hay menos de 10 páginas las mostramos todas
      startPage = 1;
      endPage = totalPages;
    } else {
      // Si hay más de 10 calculamos las páginas de inicio y fin
      if (currentPage <= 6) {
        startPage = 1;
        endPage = 10;
      } else if (currentPage + 4 >= totalPages) {
        startPage = totalPages - 9;
        endPage = totalPages;
      } else {
        startPage = currentPage - 5;
        endPage = currentPage + 4;
      }
    }

    // Calcular índices
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

    // Crear un array de páginas para poder iterar en la plantilla
    const pages = Array.from(Array((endPage + 1) - startPage).keys()).map(i => startPage + i);

    // Devolver un objeto con todas las propiedades para la plantilla
    return {
      totalItems,
      currentPage,
      pageSize,
      totalPages,
      startPage,
      endPage,
      startIndex,
      endIndex,
      pages
    };
  }

}
