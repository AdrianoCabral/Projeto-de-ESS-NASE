import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

import { AtividadeEmCampo } from './atividadeCampo/atividadeEmCampo';
import { AtividadeEmCampoService } from './atividadeCampo/atividadeEmCampo.service';
import { RelatoriosComponent} from './relatorios/relatorios.component'
import { RelatorioService } from './relatorios/relatorio.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   
}
