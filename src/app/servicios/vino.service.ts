import { Injectable } from '@angular/core';
import { Vino } from '../modelos/vino';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import {Observable} from 'rxjs';

@Injectable()
export class VinoService {

  readonly URL = environment.API_VINOS;
  readonly vinos: Vino[];

  constructor(private http: HttpClient) { }

  getVinos(): Observable<Vino[]> {
    return this.http.get<Vino[]>(this.URL);
  }

}
