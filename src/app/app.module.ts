import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

// Servicios
import { VinoService } from './servicios/vino.service';
import { PagerService } from './servicios/pager.service';

// ************** Componentes *********************
import { AppComponent } from './app.component';

// Comunes
import { NavbarComponent } from './componentes/comun/navbar/navbar.component';
import { FooterComponent } from './componentes/comun/footer/footer.component';

// Páginas
import { HomeComponent } from './componentes/paginas/home/home.component';
import { NotFoundComponent } from './componentes/paginas/not-found/not-found.component';
import { ListaVinosComponent } from './componentes/paginas/carta/lista-vinos/lista-vinos.component';
import { VinoComponent } from './componentes/paginas/carta/vino/vino.component';
import { ZoomVinoComponent } from './componentes/paginas/carta/zoom-vino/zoom-vino.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListaVinosComponent,
    VinoComponent,
    ZoomVinoComponent,
    HomeComponent,
    NotFoundComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [VinoService, PagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }

