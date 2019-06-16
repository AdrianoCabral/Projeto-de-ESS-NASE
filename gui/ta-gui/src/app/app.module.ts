import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AtividadeEmCampoComponent } from './atividadeCampo/atividadeEmCampo.component';
import { AtividadeEmCampoService } from './atividadeCampo/atividadeEmCampo.service';
import { RelatoriosComponent} from './relatorios/relatorios.component'
import { RelatorioService } from './relatorios/relatorio.service'
import { DadosComponent } from './relatorios/dados.component';

@NgModule({
  declarations: [
    AppComponent,
    AtividadeEmCampoComponent,
    DadosComponent,
    RelatoriosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule, 
    RouterModule.forRoot([
      {
        path: 'atividadeEmCampo', 
        component: AtividadeEmCampoComponent
      },
      {
        path: 'relatorios',
        component: RelatoriosComponent
      },
      {
        path: 'dados',
        component: DadosComponent
      },
    ])
  ],
  providers: [AtividadeEmCampoService, RelatorioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
