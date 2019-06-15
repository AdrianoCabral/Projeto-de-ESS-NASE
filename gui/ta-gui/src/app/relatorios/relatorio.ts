import { stringify } from "@angular/core/src/util";

export class Relatorio {
  profissional_nome: string;
  especialidade: string;
  lastAtt: string;
  popular: string;
  popular_vezes: number;
  atendimentos: number;
  faltas: number;
  demanda: Map<string, number>;
  M: number;
  F: number;

  constructor() {
    this.clean();
  }

  clean(): void {
    this.profissional_nome = "";
    this.especialidade = "";
    this.lastAtt = "";
    this.popular = "";
    this.popular_vezes = 0;
    this.atendimentos = 0;
    this.faltas = 0;
    this.demanda = new Map<string, number>();
    this.M = 0;
    this.F = 0;
    
  }

  clone(): Relatorio {
    var relatorio: Relatorio = new Relatorio();
    relatorio.demanda = new Map<string,number>();
    relatorio.copyFrom(this);
    return relatorio;
  }

  copyFrom(from: Relatorio): void {
    this.profissional_nome = from.profissional_nome;
    this.especialidade = from.especialidade;
    this.lastAtt = from.lastAtt;
    this.atendimentos = from.atendimentos;
    this.faltas = from.faltas;
    this.popular = from.popular;
    this.popular_vezes = from.popular_vezes;
    this.M = from.M;
    this.F = from.F;
    this.demanda = new Map<string, number>();
    this.copyDemandaFrom(from.demanda);
    
  }

  copyDemandaFrom(from: Map<string,number>): void {
    this.demanda = new Map<string,number>();
    for (let key in from) {
      this.demanda[key] = from[key];
    }
  }
}