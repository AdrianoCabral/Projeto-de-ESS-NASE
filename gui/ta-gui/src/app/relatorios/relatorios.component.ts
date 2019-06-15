import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';

import { Relatorio } from './relatorio';
import { RelatorioService } from './relatorio.service';

@Component({
  selector: 'app-root',
  templateUrl: './relatorios.component.html',
  styleUrls: ['./relatorios.component.css']
})
export class RelatoriosComponent implements OnInit {
   constructor(private relatorioService: RelatorioService) {}

   relatorio: Relatorio = new Relatorio();
   relatorios: Relatorio[];
   nomeDuplicado; NomeNaoCadastrado: boolean = false;

   criarrelatorio(a: Relatorio): void {
     this.relatorioService.criar(a)
        .then(ab => {
           if (ab) {
              this.relatorios.push(ab);
              this.relatorio = new Relatorio();
           } else {
              this.nomeDuplicado = true;
           }
        })
        .catch(erro => alert(erro));
   }
   removerrelatorio(a: Relatorio): void {
      this.relatorioService.remover(a)
      .then(ab => {
         if (ab) {
            var result: Relatorio = this.relatorios.find(k => k.profissional_nome == a.profissional_nome);
            this.relatorios.splice(this.relatorios.indexOf(result), 1);
         }
      })
      .catch(erro => alert(erro));
   }

   onMove(): void {
      this.nomeDuplicado = false;
      this.NomeNaoCadastrado = false;
   }

   ngOnInit(): void {
     this.relatorioService.getrelatorios()
         .then(as => this.relatorios = as)
         .catch(erro => alert(erro));
   }

}