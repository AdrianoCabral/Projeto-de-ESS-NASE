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

@NgModule({
  declarations: [
    AppComponent,
    AtividadeEmCampoComponent,
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
        path: 'aluno',
        component: RelatoriosComponent
      }
    ])
  ],
  providers: [AtividadeEmCampoService, RelatorioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
