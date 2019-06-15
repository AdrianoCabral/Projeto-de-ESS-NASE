import { stringify } from "@angular/core/src/util";

export class Relatorio {
  profissional_nome: string;
  especialidade: string;
  lastAtt: string;
  popular: string;
  popular_vezes: string;
  atendimentos: string;
  faltas: string;
  demanda: Map<string, string>;
  M: string;
  F: string;

  constructor() {
    this.clean();
  }

  clean(): void {
    this.profissional_nome = "";
    this.especialidade = "";
    this.lastAtt = "";
    this.popular = "";
    this.popular_vezes = "";
    this.atendimentos = "";
    this.faltas = "";
    this.demanda = new Map<string, string>();
    this.M = "";
    this.F = "";
    
  }

  clone(): Relatorio {
    var relatorio: Relatorio = new Relatorio();
    relatorio.demanda = new Map<string,string>();
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
    this.demanda = new Map<string, string>();
    this.copyDemandaFrom(from.demanda);
    
  }

  copyDemandaFrom(from: Map<string,string>): void {
    this.demanda = new Map<string,string>();
    for (let key in from) {
      this.demanda[key] = from[key];
    }
  }
}