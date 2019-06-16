import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';

import { Relatorio } from './relatorio';
import { RelatorioService } from './relatorio.service';

@Component({
  selector: 'dados',
  templateUrl: './dados.component.html',
  styleUrls: ['./dados.component.css']
})
export class DadosComponent implements OnInit {
   constructor(private relatorioService: RelatorioService) {}

   relatorios: Relatorio[];

   atualizarrelatorio(relatorio: Relatorio): void {
      this.relatorioService.atualizar(relatorio)
      .catch(erro => alert(erro));
   }

   ngOnInit(): void {
      this.relatorioService.getrelatorios()
         .then(relatorios => this.relatorios = relatorios)
         .catch(erro => alert(erro));
   }

}  