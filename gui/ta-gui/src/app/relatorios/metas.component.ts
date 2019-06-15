import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';

import { relatorio } from './relatorio';
import { relatorioService } from './relatorio.service';

@Component({
  selector: 'metas',
  templateUrl: './metas.component.html',
  styleUrls: ['./metas.component.css']
})
export class MetasComponent implements OnInit {
   constructor(private relatorioService: relatorioService) {}

   relatorios: relatorio[];

   atualizarrelatorio(relatorio: relatorio): void {
      this.relatorioService.atualizar(relatorio)
      .catch(erro => alert(erro));
   }

   ngOnInit(): void {
      this.relatorioService.getrelatorios()
         .then(relatorios => this.relatorios = relatorios)
         .catch(erro => alert(erro));
   }

}  